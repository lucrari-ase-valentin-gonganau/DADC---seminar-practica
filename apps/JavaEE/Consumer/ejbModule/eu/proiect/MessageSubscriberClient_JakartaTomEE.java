package eu.proiect;

//# /opt/software/jdk-17.0.2/bin/javac -cp .:/opt/software/apache-tomee-plume-9.0.0-M7/lib/* apachetomeejms/MessageSubscriberClient_JakartaTomEE.java
//# /opt/software/jdk-17.0.2/bin/java -cp .:/opt/software/apache-tomee-plume-9.0.0-M7/lib/* apachetomeejms.MessageSubscriberClient_JakartaTomEE tcp://172.17.0.3:61617 jms/topic/test



import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import java.util.Properties;


import javax.jms.JMSException;         
import javax.jms.MessageListener;     
import javax.jms.Session;              
import javax.jms.Topic;               
import javax.jms.TopicConnection;     
import javax.jms.TopicConnectionFactory; 
import javax.jms.TopicSession;         
import javax.jms.TopicSubscriber;     
import java.io.IOException;
import java.io.InputStreamReader;


public class MessageSubscriberClient_JakartaTomEE {
private static final String topicName = "image.topic";

static final String BROKER_URL_DEFAULT = "tcp://localhost:61616";
static final String BROKER_USER_DEFAULT = "admin";
static final String BROKER_PASSWORD_DEFAULT = "admin";

public static void main(String[] args) {
	Context jndiContext = null;
	TopicConnectionFactory topicConnectionFactory = null;
	TopicConnection topicConnection = null;
	
	TopicSession topicSession = null;
	Topic topic = null;
	
	TopicSubscriber topicSubscriber = null;
	ImageListener topicListener = null;
	
	InputStreamReader inputStreamReader = null;
	char answer = '\0';
	
	System.out.println("Topic name = "+topicName);
		
    String brokerUrl = System.getenv().getOrDefault("BROKER_URL", BROKER_URL_DEFAULT);
    String brokerUser = System.getenv().getOrDefault("BROKER_USER", BROKER_USER_DEFAULT);
    String brokerPass = System.getenv().getOrDefault("BROKER_PASSWORD", BROKER_PASSWORD_DEFAULT);
    
	try {
		
        Properties props = new Properties();
        props.setProperty(Context.INITIAL_CONTEXT_FACTORY, "org.apache.activemq.jndi.ActiveMQInitialContextFactory");
 		props.setProperty(Context.PROVIDER_URL, brokerUrl);

		jndiContext = new InitialContext(props);
		
		topicConnectionFactory = (TopicConnectionFactory)jndiContext.lookup("ConnectionFactory");			
	} catch(NamingException ne) {
		ne.printStackTrace();
		System.exit(2);
	}
		
	try {
		topicConnection = topicConnectionFactory.createTopicConnection(brokerUser, brokerPass);
		topicSession = topicConnection.createTopicSession(false, Session.AUTO_ACKNOWLEDGE);
		topic = topicSession.createTopic(topicName);
		topicSubscriber = topicSession.createSubscriber(topic);
			
		topicListener = new ImageListener();
		topicSubscriber.setMessageListener((MessageListener) topicListener);
		topicConnection.start();
			
		System.out.println("To end program, insert q + CR/LF");
		inputStreamReader = new InputStreamReader(System.in);
		while(!(answer == 'q')) {
			try {
				answer = (char) inputStreamReader.read();
			} catch(IOException ioe) {
				ioe.printStackTrace();
			}
		}
		} catch(JMSException jmse) {
			jmse.printStackTrace();
		} finally {
			if(topicConnection != null) {
				try {
					topicConnection.close();
				} catch (JMSException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
