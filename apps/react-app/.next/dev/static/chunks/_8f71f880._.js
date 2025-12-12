(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/containers/uploadForm/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-image-crop/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const UploadForm = ()=>{
    _s();
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [crop, setCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCropChange = (newCrop)=>{
        setCrop(newCrop);
    };
    const handleSelectFile = (event)=>{
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", ()=>setSrc(reader.result));
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const handleSubmit = ()=>{
        if (!crop || !src) return;
        // create form data to send to backend
        const form = new FormData();
        form.append("file", src);
        form.append("x", String(Math.round(crop.x)));
        form.append("y", String(Math.round(crop.y)));
        form.append("width", String(Math.round(crop.width)));
        form.append("height", String(Math.round(crop.height)));
        const path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.BASE_PATH_URL || "http://localhost:8081";
        fetch(`${path}/upload-and-process`, {
            method: "POST",
            body: form,
            // add multipart/form-data header
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response)=>{
            // redirect to result page
            console.log("Răspuns de la server:", response);
        // setTimeout(() => {
        //   window.location.href = "/procesare/rezultat";
        // }, 2500);
        }).catch((error)=>{
            console.error("Eroare la trimiterea imaginii:", error);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-fluid d-flex justify-content-center align-items-center min-vh-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card shadow-lg",
            style: {
                maxWidth: "600px",
                width: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-header text-center bg-primary text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-0",
                        children: "Trimite imaginea spre procesare"
                    }, void 0, false, {
                        fileName: "[project]/src/containers/uploadForm/index.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "fileInput",
                                    className: "form-label fw-bold",
                                    children: "Selectează imaginea:"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "fileInput",
                                    type: "file",
                                    accept: "image/*",
                                    onChange: handleSelectFile,
                                    className: "form-control"
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/containers/uploadForm/index.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "alert alert-info mb-3",
                                    role: "alert",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "bi bi-info-circle me-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/uploadForm/index.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Instrucțiuni:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/uploadForm/index.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ' Selectează zona din imagine pe care dorești să o procesezi prin tragerea unui dreptunghi cu mouse-ul, apoi apasă butonul "Trimite".'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        crop: crop,
                                        onChange: handleCropChange,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: src,
                                            alt: "Imagine pentru crop",
                                            style: {
                                                maxWidth: "100%"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/uploadForm/index.tsx",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/containers/uploadForm/index.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                crop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "alert alert-secondary mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            className: "mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-crop me-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Coordonate selectate:"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/containers/uploadForm/index.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "row text-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "X:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            Math.round(crop.x),
                                                            "px",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Y:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            Math.round(crop.y),
                                                            "px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Lățime:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            Math.round(crop.width),
                                                            "px",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Înălțime:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            Math.round(crop.height),
                                                            "px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/containers/uploadForm/index.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmit,
                                    className: "btn btn-success btn-lg",
                                    disabled: crop?.height === 0 || crop?.width === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "bi bi-send me-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/containers/uploadForm/index.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Trimite"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/containers/uploadForm/index.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/containers/uploadForm/index.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/containers/uploadForm/index.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/containers/uploadForm/index.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UploadForm, "X/K/eeIVInr7tQKtrFNQmSYPpuA=");
_c = UploadForm;
const __TURBOPACK__default__export__ = UploadForm;
var _c;
__turbopack_context__.k.register(_c, "UploadForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/react-image-crop/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Component",
    ()=>S,
    "ReactCrop",
    ()=>S,
    "areCropsEqual",
    ()=>X,
    "centerCrop",
    ()=>L,
    "clamp",
    ()=>b,
    "cls",
    ()=>H,
    "containCrop",
    ()=>k,
    "convertToPercentCrop",
    ()=>v,
    "convertToPixelCrop",
    ()=>D,
    "default",
    ()=>S,
    "defaultCrop",
    ()=>E,
    "makeAspectCrop",
    ()=>B,
    "nudgeCrop",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _ = Object.defineProperty;
var $ = (a, h, e)=>h in a ? _(a, h, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : a[h] = e;
var m = (a, h, e)=>$(a, typeof h != "symbol" ? h + "" : h, e);
;
const E = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    unit: "px"
}, b = (a, h, e)=>Math.min(Math.max(a, h), e), H = (...a)=>a.filter((h)=>h && typeof h == "string").join(" "), X = (a, h)=>a === h || a.width === h.width && a.height === h.height && a.x === h.x && a.y === h.y && a.unit === h.unit;
function B(a, h, e, n) {
    const t = D(a, e, n);
    return a.width && (t.height = t.width / h), a.height && (t.width = t.height * h), t.y + t.height > n && (t.height = n - t.y, t.width = t.height * h), t.x + t.width > e && (t.width = e - t.x, t.height = t.width / h), a.unit === "%" ? v(t, e, n) : t;
}
function L(a, h, e) {
    const n = D(a, h, e);
    return n.x = (h - n.width) / 2, n.y = (e - n.height) / 2, a.unit === "%" ? v(n, h, e) : n;
}
function v(a, h, e) {
    return a.unit === "%" ? {
        ...E,
        ...a,
        unit: "%"
    } : {
        unit: "%",
        x: a.x ? a.x / h * 100 : 0,
        y: a.y ? a.y / e * 100 : 0,
        width: a.width ? a.width / h * 100 : 0,
        height: a.height ? a.height / e * 100 : 0
    };
}
function D(a, h, e) {
    return a.unit ? a.unit === "px" ? {
        ...E,
        ...a,
        unit: "px"
    } : {
        unit: "px",
        x: a.x ? a.x * h / 100 : 0,
        y: a.y ? a.y * e / 100 : 0,
        width: a.width ? a.width * h / 100 : 0,
        height: a.height ? a.height * e / 100 : 0
    } : {
        ...E,
        ...a,
        unit: "px"
    };
}
function k(a, h, e, n, t, d = 0, r = 0, o = n, w = t) {
    const i = {
        ...a
    };
    let s = Math.min(d, n), c = Math.min(r, t), g = Math.min(o, n), p = Math.min(w, t);
    h && (h > 1 ? (s = r ? r * h : s, c = s / h, g = o * h) : (c = d ? d / h : c, s = c * h, p = w / h)), i.y < 0 && (i.height = Math.max(i.height + i.y, c), i.y = 0), i.x < 0 && (i.width = Math.max(i.width + i.x, s), i.x = 0);
    const l = n - (i.x + i.width);
    l < 0 && (i.x = Math.min(i.x, n - s), i.width += l);
    const C = t - (i.y + i.height);
    if (C < 0 && (i.y = Math.min(i.y, t - c), i.height += C), i.width < s && ((e === "sw" || e == "nw") && (i.x -= s - i.width), i.width = s), i.height < c && ((e === "nw" || e == "ne") && (i.y -= c - i.height), i.height = c), i.width > g && ((e === "sw" || e == "nw") && (i.x -= g - i.width), i.width = g), i.height > p && ((e === "nw" || e == "ne") && (i.y -= p - i.height), i.height = p), h) {
        const y = i.width / i.height;
        if (y < h) {
            const f = Math.max(i.width / h, c);
            (e === "nw" || e == "ne") && (i.y -= f - i.height), i.height = f;
        } else if (y > h) {
            const f = Math.max(i.height * h, s);
            (e === "sw" || e == "nw") && (i.x -= f - i.width), i.width = f;
        }
    }
    return i;
}
function I(a, h, e, n) {
    const t = {
        ...a
    };
    return h === "ArrowLeft" ? n === "nw" ? (t.x -= e, t.y -= e, t.width += e, t.height += e) : n === "w" ? (t.x -= e, t.width += e) : n === "sw" ? (t.x -= e, t.width += e, t.height += e) : n === "ne" ? (t.y += e, t.width -= e, t.height -= e) : n === "e" ? t.width -= e : n === "se" && (t.width -= e, t.height -= e) : h === "ArrowRight" && (n === "nw" ? (t.x += e, t.y += e, t.width -= e, t.height -= e) : n === "w" ? (t.x += e, t.width -= e) : n === "sw" ? (t.x += e, t.width -= e, t.height -= e) : n === "ne" ? (t.y -= e, t.width += e, t.height += e) : n === "e" ? t.width += e : n === "se" && (t.width += e, t.height += e)), h === "ArrowUp" ? n === "nw" ? (t.x -= e, t.y -= e, t.width += e, t.height += e) : n === "n" ? (t.y -= e, t.height += e) : n === "ne" ? (t.y -= e, t.width += e, t.height += e) : n === "sw" ? (t.x += e, t.width -= e, t.height -= e) : n === "s" ? t.height -= e : n === "se" && (t.width -= e, t.height -= e) : h === "ArrowDown" && (n === "nw" ? (t.x += e, t.y += e, t.width -= e, t.height -= e) : n === "n" ? (t.y += e, t.height -= e) : n === "ne" ? (t.y += e, t.width -= e, t.height -= e) : n === "sw" ? (t.x -= e, t.width += e, t.height += e) : n === "s" ? t.height += e : n === "se" && (t.width += e, t.height += e)), t;
}
const M = {
    capture: !0,
    passive: !1
};
let N = 0;
const x = class x extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PureComponent"] {
    constructor(){
        super(...arguments);
        m(this, "docMoveBound", !1);
        m(this, "mouseDownOnCrop", !1);
        m(this, "dragStarted", !1);
        m(this, "evData", {
            startClientX: 0,
            startClientY: 0,
            startCropX: 0,
            startCropY: 0,
            clientX: 0,
            clientY: 0,
            isResize: !0
        });
        m(this, "componentRef", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])());
        m(this, "mediaRef", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])());
        m(this, "resizeObserver");
        m(this, "initChangeCalled", !1);
        m(this, "instanceId", `rc-${N++}`);
        m(this, "state", {
            cropIsActive: !1,
            newCropIsBeingDrawn: !1
        });
        m(this, "onCropPointerDown", (e)=>{
            const { crop: n, disabled: t } = this.props, d = this.getBox();
            if (!n) return;
            const r = D(n, d.width, d.height);
            if (t) return;
            e.cancelable && e.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({
                preventScroll: !0
            });
            const o = e.target.dataset.ord, w = !!o;
            let i = e.clientX, s = e.clientY, c = r.x, g = r.y;
            if (o) {
                const p = e.clientX - d.x, l = e.clientY - d.y;
                let C = 0, y = 0;
                o === "ne" || o == "e" ? (C = p - (r.x + r.width), y = l - r.y, c = r.x, g = r.y + r.height) : o === "se" || o === "s" ? (C = p - (r.x + r.width), y = l - (r.y + r.height), c = r.x, g = r.y) : o === "sw" || o == "w" ? (C = p - r.x, y = l - (r.y + r.height), c = r.x + r.width, g = r.y) : (o === "nw" || o == "n") && (C = p - r.x, y = l - r.y, c = r.x + r.width, g = r.y + r.height), i = c + d.x + C, s = g + d.y + y;
            }
            this.evData = {
                startClientX: i,
                startClientY: s,
                startCropX: c,
                startCropY: g,
                clientX: e.clientX,
                clientY: e.clientY,
                isResize: w,
                ord: o
            }, this.mouseDownOnCrop = !0, this.setState({
                cropIsActive: !0
            });
        });
        m(this, "onComponentPointerDown", (e)=>{
            const { crop: n, disabled: t, locked: d, keepSelection: r, onChange: o } = this.props, w = this.getBox();
            if (t || d || r && n) return;
            e.cancelable && e.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({
                preventScroll: !0
            });
            const i = e.clientX - w.x, s = e.clientY - w.y, c = {
                unit: "px",
                x: i,
                y: s,
                width: 0,
                height: 0
            };
            this.evData = {
                startClientX: e.clientX,
                startClientY: e.clientY,
                startCropX: i,
                startCropY: s,
                clientX: e.clientX,
                clientY: e.clientY,
                isResize: !0
            }, this.mouseDownOnCrop = !0, o(D(c, w.width, w.height), v(c, w.width, w.height)), this.setState({
                cropIsActive: !0,
                newCropIsBeingDrawn: !0
            });
        });
        m(this, "onDocPointerMove", (e)=>{
            const { crop: n, disabled: t, onChange: d, onDragStart: r } = this.props, o = this.getBox();
            if (t || !n || !this.mouseDownOnCrop) return;
            e.cancelable && e.preventDefault(), this.dragStarted || (this.dragStarted = !0, r && r(e));
            const { evData: w } = this;
            w.clientX = e.clientX, w.clientY = e.clientY;
            let i;
            w.isResize ? i = this.resizeCrop() : i = this.dragCrop(), X(n, i) || d(D(i, o.width, o.height), v(i, o.width, o.height));
        });
        m(this, "onComponentKeyDown", (e)=>{
            const { crop: n, disabled: t, onChange: d, onComplete: r } = this.props;
            if (t) return;
            const o = e.key;
            let w = !1;
            if (!n) return;
            const i = this.getBox(), s = this.makePixelCrop(i), g = (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) ? x.nudgeStepLarge : e.shiftKey ? x.nudgeStepMedium : x.nudgeStep;
            if (o === "ArrowLeft" ? (s.x -= g, w = !0) : o === "ArrowRight" ? (s.x += g, w = !0) : o === "ArrowUp" ? (s.y -= g, w = !0) : o === "ArrowDown" && (s.y += g, w = !0), w) {
                e.cancelable && e.preventDefault(), s.x = b(s.x, 0, i.width - s.width), s.y = b(s.y, 0, i.height - s.height);
                const p = D(s, i.width, i.height), l = v(s, i.width, i.height);
                d(p, l), r && r(p, l);
            }
        });
        m(this, "onHandlerKeyDown", (e, n)=>{
            const { aspect: t = 0, crop: d, disabled: r, minWidth: o = 0, minHeight: w = 0, maxWidth: i, maxHeight: s, onChange: c, onComplete: g } = this.props, p = this.getBox();
            if (r || !d) return;
            if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") e.stopPropagation(), e.preventDefault();
            else return;
            const C = (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) ? x.nudgeStepLarge : e.shiftKey ? x.nudgeStepMedium : x.nudgeStep, y = D(d, p.width, p.height), f = I(y, e.key, C, n), R = k(f, t, n, p.width, p.height, o, w, i, s);
            if (!X(d, R)) {
                const Y = v(R, p.width, p.height);
                c(R, Y), g && g(R, Y);
            }
        });
        m(this, "onDocPointerDone", (e)=>{
            const { crop: n, disabled: t, onComplete: d, onDragEnd: r } = this.props, o = this.getBox();
            this.unbindDocMove(), !(t || !n) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, r && r(e), d && d(D(n, o.width, o.height), v(n, o.width, o.height)), this.setState({
                cropIsActive: !1,
                newCropIsBeingDrawn: !1
            }));
        });
        m(this, "onDragFocus", ()=>{
            var e;
            (e = this.componentRef.current) == null || e.scrollTo(0, 0);
        });
    }
    get document() {
        return document;
    }
    // We unfortunately get the bounding box every time as x+y changes
    // due to scrolling.
    getBox() {
        const e = this.mediaRef.current;
        if (!e) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        const { x: n, y: t, width: d, height: r } = e.getBoundingClientRect();
        return {
            x: n,
            y: t,
            width: d,
            height: r
        };
    }
    componentDidUpdate(e) {
        const { crop: n, onComplete: t } = this.props;
        if (t && !e.crop && n) {
            const { width: d, height: r } = this.getBox();
            d && r && t(D(n, d, r), v(n, d, r));
        }
    }
    componentWillUnmount() {
        this.resizeObserver && this.resizeObserver.disconnect(), this.unbindDocMove();
    }
    bindDocMove() {
        this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, M), this.document.addEventListener("pointerup", this.onDocPointerDone, M), this.document.addEventListener("pointercancel", this.onDocPointerDone, M), this.docMoveBound = !0);
    }
    unbindDocMove() {
        this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, M), this.document.removeEventListener("pointerup", this.onDocPointerDone, M), this.document.removeEventListener("pointercancel", this.onDocPointerDone, M), this.docMoveBound = !1);
    }
    getCropStyle() {
        const { crop: e } = this.props;
        if (e) return {
            top: `${e.y}${e.unit}`,
            left: `${e.x}${e.unit}`,
            width: `${e.width}${e.unit}`,
            height: `${e.height}${e.unit}`
        };
    }
    dragCrop() {
        const { evData: e } = this, n = this.getBox(), t = this.makePixelCrop(n), d = e.clientX - e.startClientX, r = e.clientY - e.startClientY;
        return t.x = b(e.startCropX + d, 0, n.width - t.width), t.y = b(e.startCropY + r, 0, n.height - t.height), t;
    }
    getPointRegion(e, n, t, d) {
        const { evData: r } = this, o = r.clientX - e.x, w = r.clientY - e.y;
        let i;
        d && n ? i = n === "nw" || n === "n" || n === "ne" : i = w < r.startCropY;
        let s;
        return t && n ? s = n === "nw" || n === "w" || n === "sw" : s = o < r.startCropX, s ? i ? "nw" : "sw" : i ? "ne" : "se";
    }
    resolveMinDimensions(e, n, t = 0, d = 0) {
        const r = Math.min(t, e.width), o = Math.min(d, e.height);
        return !n || !r && !o ? [
            r,
            o
        ] : n > 1 ? r ? [
            r,
            r / n
        ] : [
            o * n,
            o
        ] : o ? [
            o * n,
            o
        ] : [
            r,
            r / n
        ];
    }
    resizeCrop() {
        const { evData: e } = this, { aspect: n = 0, maxWidth: t, maxHeight: d } = this.props, r = this.getBox(), [o, w] = this.resolveMinDimensions(r, n, this.props.minWidth, this.props.minHeight);
        let i = this.makePixelCrop(r);
        const s = this.getPointRegion(r, e.ord, o, w), c = e.ord || s;
        let g = e.clientX - e.startClientX, p = e.clientY - e.startClientY;
        (o && c === "nw" || c === "w" || c === "sw") && (g = Math.min(g, -o)), (w && c === "nw" || c === "n" || c === "ne") && (p = Math.min(p, -w));
        const l = {
            unit: "px",
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        s === "ne" ? (l.x = e.startCropX, l.width = g, n ? (l.height = l.width / n, l.y = e.startCropY - l.height) : (l.height = Math.abs(p), l.y = e.startCropY - l.height)) : s === "se" ? (l.x = e.startCropX, l.y = e.startCropY, l.width = g, n ? l.height = l.width / n : l.height = p) : s === "sw" ? (l.x = e.startCropX + g, l.y = e.startCropY, l.width = Math.abs(g), n ? l.height = l.width / n : l.height = p) : s === "nw" && (l.x = e.startCropX + g, l.width = Math.abs(g), n ? (l.height = l.width / n, l.y = e.startCropY - l.height) : (l.height = Math.abs(p), l.y = e.startCropY + p));
        const C = k(l, n, s, r.width, r.height, o, w, t, d);
        return n || x.xyOrds.indexOf(c) > -1 ? i = C : x.xOrds.indexOf(c) > -1 ? (i.x = C.x, i.width = C.width) : x.yOrds.indexOf(c) > -1 && (i.y = C.y, i.height = C.height), i.x = b(i.x, 0, r.width - i.width), i.y = b(i.y, 0, r.height - i.height), i;
    }
    renderCropSelection() {
        const { ariaLabels: e = x.defaultProps.ariaLabels, disabled: n, locked: t, renderSelectionAddon: d, ruleOfThirds: r, crop: o } = this.props, w = this.getCropStyle();
        if (o) return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: w,
            className: "ReactCrop__crop-selection",
            onPointerDown: this.onCropPointerDown,
            "aria-label": e.cropArea,
            tabIndex: 0,
            onKeyDown: this.onComponentKeyDown,
            role: "group"
        }, !n && !t && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-elements",
            onFocus: this.onDragFocus
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-bar ord-n",
            "data-ord": "n"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-bar ord-e",
            "data-ord": "e"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-bar ord-s",
            "data-ord": "s"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-bar ord-w",
            "data-ord": "w"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-nw",
            "data-ord": "nw",
            tabIndex: 0,
            "aria-label": e.nwDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "nw"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-n",
            "data-ord": "n",
            tabIndex: 0,
            "aria-label": e.nDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "n"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-ne",
            "data-ord": "ne",
            tabIndex: 0,
            "aria-label": e.neDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "ne"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-e",
            "data-ord": "e",
            tabIndex: 0,
            "aria-label": e.eDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "e"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-se",
            "data-ord": "se",
            tabIndex: 0,
            "aria-label": e.seDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "se"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-s",
            "data-ord": "s",
            tabIndex: 0,
            "aria-label": e.sDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "s"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-sw",
            "data-ord": "sw",
            tabIndex: 0,
            "aria-label": e.swDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "sw"),
            role: "button"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__drag-handle ord-w",
            "data-ord": "w",
            tabIndex: 0,
            "aria-label": e.wDragHandle,
            onKeyDown: (i)=>this.onHandlerKeyDown(i, "w"),
            role: "button"
        })), d && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__selection-addon",
            onPointerDown: (i)=>i.stopPropagation()
        }, d(this.state)), r && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__rule-of-thirds-hz"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "ReactCrop__rule-of-thirds-vt"
        })));
    }
    makePixelCrop(e) {
        const n = {
            ...E,
            ...this.props.crop || {}
        };
        return D(n, e.width, e.height);
    }
    render() {
        const { aspect: e, children: n, circularCrop: t, className: d, crop: r, disabled: o, locked: w, style: i, ruleOfThirds: s } = this.props, { cropIsActive: c, newCropIsBeingDrawn: g } = this.state, p = r ? this.renderCropSelection() : null, l = H("ReactCrop", d, c && "ReactCrop--active", o && "ReactCrop--disabled", w && "ReactCrop--locked", g && "ReactCrop--new-crop", r && e && "ReactCrop--fixed-aspect", r && t && "ReactCrop--circular-crop", r && s && "ReactCrop--rule-of-thirds", !this.dragStarted && r && !r.width && !r.height && "ReactCrop--invisible-crop", t && "ReactCrop--no-animate");
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: this.componentRef,
            className: l,
            style: i
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: this.mediaRef,
            className: "ReactCrop__child-wrapper",
            onPointerDown: this.onComponentPointerDown
        }, n), r ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
            className: "ReactCrop__crop-mask",
            width: "100%",
            height: "100%"
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("mask", {
            id: `hole-${this.instanceId}`
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
            width: "100%",
            height: "100%",
            fill: "white"
        }), t ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ellipse", {
            cx: `${r.x + r.width / 2}${r.unit}`,
            cy: `${r.y + r.height / 2}${r.unit}`,
            rx: `${r.width / 2}${r.unit}`,
            ry: `${r.height / 2}${r.unit}`,
            fill: "black"
        }) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
            x: `${r.x}${r.unit}`,
            y: `${r.y}${r.unit}`,
            width: `${r.width}${r.unit}`,
            height: `${r.height}${r.unit}`,
            fill: "black"
        }))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
            fill: "black",
            fillOpacity: 0.5,
            width: "100%",
            height: "100%",
            mask: `url(#hole-${this.instanceId})`
        })) : void 0, p);
    }
};
m(x, "xOrds", [
    "e",
    "w"
]), m(x, "yOrds", [
    "n",
    "s"
]), m(x, "xyOrds", [
    "nw",
    "ne",
    "se",
    "sw"
]), m(x, "nudgeStep", 1), m(x, "nudgeStepMedium", 10), m(x, "nudgeStepLarge", 100), m(x, "defaultProps", {
    ariaLabels: {
        cropArea: "Use the arrow keys to move the crop selection area",
        nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
        nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
        neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
        eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
        seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
        sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
        swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
        wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
    }
});
let S = x;
;
}),
]);

//# sourceMappingURL=_8f71f880._.js.map