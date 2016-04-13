var appTestData = {
    "XMLName": {
        "Space": "",
        "Local": ""
    },
    "tags": {
        "免费课程": 1,
        "创建": 4,
        "加入": 1,
        "加载": 1,
        "命令": 1,
        "字段集": 1,
        "导学": 2,
        "导学老师": 1,
        "搜索": 2,
        "支持列表": 1,
        "数据集": 1,
        "更新": 4,
        "检测": 1,
        "注册": 2,
        "注销": 1,
        "用户": 11,
        "登录": 3,
        "登录信息": 1,
        "第三方": 1,
        "获取": 1,
        "课程": 7,
        "课程内容": 2,
        "跨域": 1,
        "验证": 1
    },
    "pkgs": [{
        "name": "w.gdy.io/dyf/course/courseapi",
        "funcs": [{
            "name": "CourseSupported",
            "title": "获取课程命令支持列表",
            "desc": "获取课程支持命令的详细命令与参数说明\n",
            "tags": [
                "课程",
                "支持列表",
                "命令"
            ],
            "url": {
                "path": "~/put/api/courseSupported",
                "method": "GET",
                "desc": "不需求登录"
            },
            "arg": {
                "desc": "json对象中的参数",
                "example": "~/put/api/courseSupported"
            },
            "ret": {
                "desc": "返回基础json数据，数据路径\"插件名/命令名/命令参数解释\"",
                "example": {
                    "service": {
                        "list": "不需要参数，返回导学老师列表信息，详细请查看获取导学老师列表接口(findService)"
                    },
                    "summary": {
                        "idx": {
                            "args": {
                                "type": "目录类型"
                            },
                            "desc": "加载内容目录，返回数据格式请求查看课程内容相关接口"
                        }
                    },
                    "text": {
                        "idx": {
                            "args": {
                                "type": "目录类型"
                            },
                            "desc": "加载内容目录，返回数据格式请求查看课程内容相关接口"
                        }
                    }
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "CreateCourse",
            "title": "创建课程",
            "desc": "通过课程json对象创建课程\n",
            "tags": [
                "课程",
                "创建"
            ],
            "url": {
                "path": "~/usr/api/createCourse?demo=1",
                "method": "POST",
                "ctype": "application/json",
                "desc": "需求登录，POST请求"
            },
            "arg": {
                "items": [{
                    "name": "demo",
                    "type": "O",
                    "desc": "Query参数，是否创建样例，默认0不创建，1创建样例"
                }, {
                    "name": "desc",
                    "type": "O",
                    "desc": "课程简单描述"
                }, {
                    "name": "end_time",
                    "type": "O",
                    "desc": "课程结束时间"
                }, {
                    "name": "imgs",
                    "type": "O",
                    "desc": "课程封面,图片地址列表"
                }, {
                    "name": "start_time",
                    "type": "O",
                    "desc": "开课时间"
                }, {
                    "name": "suitable",
                    "type": "O",
                    "desc": "适用人群"
                }, {
                    "name": "time",
                    "type": "O",
                    "desc": "课程创建时间"
                }, {
                    "name": "title",
                    "type": "O",
                    "desc": "课程标题"
                }],
                "desc": "json对象中的参数",
                "example": {
                    "desc": "desc",
                    "end_time": 1454242698801,
                    "imgs": [
                        "ss"
                    ],
                    "start_time": 1454242598801,
                    "suitable": [
                        "一年级"
                    ],
                    "tags": [
                        "一年级",
                        "物理"
                    ],
                    "time": 1454242598805,
                    "title": "abc"
                }
            },
            "ret": {
                "items": [{
                    "name": "access",
                    "type": "O",
                    "desc": "用户权限级别，10：成功加入了课程，100：课程的拥有者"
                }, {
                    "name": "code",
                    "type": "I",
                    "desc": "0：创建成功，非0：创建失败"
                }, {
                    "name": "id",
                    "type": "S",
                    "desc": "课程id"
                }, {
                    "name": "iids",
                    "type": "O",
                    "desc": "课程相关组件id列表，service是导学老师组件，summary课程简介组件，text课程内容组件"
                }],
                "desc": "返回通用code/data，基础字段与参数相同",
                "example": {
                    "code": 0,
                    "data": {
                        "access": {
                            "u597": 100
                        },
                        "desc": "desc",
                        "end_time": 1454242698801,
                        "id": "56adfea979c0de73e1c09c81",
                        "iids": {
                            "service": "56adfea979c0de73e1c09c82",
                            "summary": {
                                "aid": "56adfea979c0de73e1c09c83"
                            },
                            "text": {
                                "aid": "56adfea979c0de73e1c09c85"
                            }
                        },
                        "imgs": [
                            "ss"
                        ],
                        "start_time": 1454242598801,
                        "suitable": [
                            "一年级"
                        ],
                        "tags": [
                            "一年级",
                            "物理"
                        ],
                        "time": 1454242598805,
                        "title": "abc",
                        "uid": "u597"
                    }
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "FindService",
            "title": "获取课程导学老师列表",
            "desc": "通过课程id获取导学老师相关信息列表\n",
            "tags": [
                "课程",
                "导学",
                "导学老师"
            ],
            "url": {
                "path": "~/pub/api/findService",
                "method": "GET",
                "desc": "不需求登录，GET请求"
            },
            "arg": {
                "items": [{
                    "name": "cid",
                    "type": "R",
                    "desc": "课程id"
                }],
                "desc": "普通Query参数",
                "example": "~/pub/api/findService?cid=xx"
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0：成功，非0：失败"
                }, {
                    "name": "service",
                    "type": "O",
                    "desc": "导学相关信息"
                }, {
                    "name": "service.attent",
                    "type": "I",
                    "desc": "通知时间"
                }, {
                    "name": "service.lead",
                    "type": "S",
                    "desc": "导学导语"
                }, {
                    "name": "service.price",
                    "type": "F",
                    "desc": "导学价格"
                }, {
                    "name": "service.uids",
                    "type": "A",
                    "desc": "导学老师id列表"
                }, {
                    "name": "users",
                    "type": "O",
                    "desc": "导学老师信息列表，路径格式为\"/users/用户id/用户信息\"，用户结构体相关解释请查看用户相关接口"
                }],
                "desc": "返回通用code/data",
                "example": {
                    "code": 0,
                    "data": {
                        "service": {
                            "attent": 0,
                            "lead": "",
                            "price": 0,
                            "uids": [
                                "u612"
                            ]
                        },
                        "users": {
                            "u612": {
                                "id": "u612",
                                "usr": [
                                    "1454247997533"
                                ]
                            }
                        }
                    }
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "JoinCourse",
            "title": "加入免费课程",
            "desc": "通过课程id加入免费课程，购买课程请查看购买课程相关\n",
            "tags": [
                "课程",
                "加入",
                "免费课程"
            ],
            "url": {
                "path": "~/usr/api/joinCourse",
                "method": "GET",
                "desc": "需求登录，GET请求"
            },
            "arg": {
                "desc": "json对象中的参数与创建课程相同",
                "example": "与创建课程相同"
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0：更新成功，非0：更新失败"
                }],
                "desc": "返回通用code/data",
                "example": {
                    "code": 0,
                    "data": "OK"
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "LoadCourse",
            "title": "获取课程相关信息",
            "desc": "通过课程id及相关命令获取课程的相关信息，通过扩展命令可以实现一个请求加载多项课程相关内容，如目录，导学老师列表等\n如果用户已经登录或向接口传token参数将会返回用户在当前课程中的访问权限\n",
            "tags": [
                "课程",
                "获取",
                "加载"
            ],
            "url": {
                "path": "~/pub/api/loadCourse",
                "method": "GET",
                "desc": "不需求登录，普通GET请求"
            },
            "arg": {
                "items": [{
                    "name": "cid",
                    "type": "R",
                    "desc": "课程id"
                }, {
                    "name": "cmds",
                    "type": "O",
                    "desc": "扩展命令列表, json格式，如果参数太长可以使用POST请求"
                }, {
                    "name": "price",
                    "type": "O",
                    "desc": "是否检测每个插件的购买价格"
                }, {
                    "name": "pvs",
                    "type": "O",
                    "desc": "是否检测插件内容是否存在，返回visiable列表，0不检测，1检测"
                }],
                "desc": "普通query参数",
                "example": "~/pub/api/loadCourse?cid=xx&pvs=1&price=1&cmds={\"service\":{\"list\":{}}}"
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0：成功，非0：失败"
                }, {
                    "name": "crs",
                    "type": "O",
                    "desc": "课程对象，字段意义请查看课程创建接口的相关描述"
                }, {
                    "name": "errs",
                    "type": "O",
                    "desc": "命令执行错误信息"
                }, {
                    "name": "items",
                    "type": "O",
                    "desc": "命令执行结果列表，数据路径为\"插件名/命令/数据\"，数据格式请查看~/pub/api/courseSupported"
                }, {
                    "name": "price",
                    "type": "F",
                    "desc": "课程购买总价格"
                }, {
                    "name": "prices",
                    "type": "O",
                    "desc": "课程插件的购买价格详细列表。数据路径为\"插件名/价格信息\""
                }, {
                    "name": "visiable",
                    "type": "O",
                    "desc": "课程插件是否支持列表"
                }],
                "desc": "返回通用code/data",
                "example": {
                    "code": 0,
                    "data": {
                        "crs": {
                            "desc": "desc",
                            "end_time": 1454245584567,
                            "id": "56ae066c79c0de74efcefcce",
                            "iids": {
                                "service": "56ae066c79c0de74efcefccf",
                                "summary": {
                                    "aid": "56ae066c79c0de74efcefcd0"
                                },
                                "text": {
                                    "aid": "56ae066c79c0de74efcefcd2"
                                }
                            },
                            "imgs": [
                                "ss"
                            ],
                            "start_time": 1454245484567,
                            "suitable": [
                                "ss"
                            ],
                            "tags": [
                                "ss"
                            ],
                            "title": "xkkdds",
                            "uid": "u608"
                        },
                        "errs": {
                            "xxxx": "error message"
                        },
                        "items": {
                            "service": {
                                "list": {
                                    "service": {
                                        "attent": 0,
                                        "lead": "",
                                        "price": 0,
                                        "uids": [
                                            "u608"
                                        ]
                                    },
                                    "users": {
                                        "u608": {
                                            "id": "u608",
                                            "usr": [
                                                "1454245484564"
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        "price": 0,
                        "prices": {
                            "service": {
                                "desc": "",
                                "imgs": [
                                    "ss"
                                ],
                                "price": 0,
                                "title": "xkkdds(导学)"
                            },
                            "summary": {
                                "desc": "",
                                "imgs": [
                                    "ss"
                                ],
                                "price": 0,
                                "title": "xkkdds(内容)"
                            },
                            "text": {
                                "desc": "",
                                "imgs": [
                                    "ss"
                                ],
                                "price": 0,
                                "title": "xkkdds(内容)"
                            }
                        },
                        "visiable": {
                            "service": true,
                            "summary": false,
                            "text": false
                        }
                    }
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "UpdateCourse",
            "title": "更新课程",
            "desc": "通过课程json对象更新课程\n",
            "tags": [
                "课程",
                "更新"
            ],
            "url": {
                "path": "~/usr/api/updateCourse",
                "method": "POST",
                "ctype": "application/json",
                "desc": "需求登录，POST请求"
            },
            "arg": {
                "desc": "json对象中的参数与创建课程相同",
                "example": "与创建课程相同"
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0：更新成功，非0：更新失败"
                }],
                "desc": "返回通用code/data",
                "example": {
                    "code": 0,
                    "data": "OK"
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "UpdateService",
            "title": "更新课程导学老师列表",
            "desc": "通过课程id、用户id列表、导语、通知时间更新导学老师相关信息列表\n",
            "tags": [
                "课程",
                "导学",
                "更新"
            ],
            "url": {
                "path": "~/usr/api/updateService",
                "method": "GET",
                "desc": "需求登录，GET请求"
            },
            "arg": {
                "items": [{
                    "name": "attent",
                    "type": "O",
                    "desc": "通知时间"
                }, {
                    "name": "cid",
                    "type": "R",
                    "desc": "课程id"
                }, {
                    "name": "lead",
                    "type": "O",
                    "desc": "导学导语"
                }, {
                    "name": "uids",
                    "type": "R",
                    "desc": "导学老师id列表，以逗号分割"
                }],
                "desc": "普通Query参数",
                "example": "~/usr/api/updateService?cid=xx&uids=u1,u2,u3"
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0：成功，非0：失败"
                }],
                "desc": "返回通用code/data",
                "example": {
                    "code": 0,
                    "data": "OK"
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }]
    }, {
        "name": "w.gdy.io/dyf/uas/ucs/certification",
        "funcs": [{
            "name": "UCertStatus"
        }]
    }, {
        "name": "w.gdy.io/dyf/uas/ucs/sso",
        "funcs": [{
            "name": "Auth",
            "title": "验证用户登录",
            "desc": "通过token或当前cookie验证用户是否已经登录\n",
            "tags": [
                "用户",
                "验证"
            ],
            "url": {
                "path": "~/sso/api/auth",
                "method": "GET",
                "desc": "不需求登录，GET请求"
            },
            "arg": {
                "items": [{
                    "name": "token",
                    "type": "O",
                    "desc": "用户登录的token"
                }],
                "desc": "普通Query参数",
                "example": "~/sso/api/auth"
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0:获取成功,1:未登录"
                }, {
                    "name": "data",
                    "type": "S",
                    "desc": "用户id"
                }],
                "desc": "返回能用code/data",
                "example": {
                    "code": 0,
                    "data": "u_123"
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "Create",
            "title": "注册用户",
            "desc": "通过用户对象的相关字段注册用户\n",
            "tags": [
                "用户",
                "注册",
                "创建"
            ],
            "url": {
                "path": "~/sso/api/create",
                "method": "POST",
                "ctype": "application/json",
                "desc": "不需求登录，POST请求"
            },
            "arg": {
                "items": [{
                    "name": "attrs",
                    "type": "O",
                    "desc": "用户自定义属性，以组的形式保存。~/sso/api/suppored中获取支持用户组"
                }, {
                    "name": "login",
                    "type": "O",
                    "desc": "创建之后是否登录，1 登录，0 不登录，Query中的参数，不要放在json对象中"
                }, {
                    "name": "pwd",
                    "type": "R",
                    "desc": "用户密码"
                }, {
                    "name": "usr",
                    "type": "R",
                    "desc": "用户名列表，如果普通用户名、手机、邮箱等"
                }],
                "desc": "json对象中的参数以及query中参数",
                "example": {
                    "attrs": {
                        "basic": {
                            "email": "xxx@xx.com",
                            "phone": "12345678901"
                        }
                    },
                    "id": "u14",
                    "last": 1454173753678,
                    "pwd": "123456",
                    "status": 10,
                    "time": 1454173753678,
                    "usr": [
                        "1454173753676"
                    ]
                }
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0：登录成功，1：参数错误，2：json body错误，3：添加用户失败，4：登录失败"
                }, {
                    "name": "token",
                    "type": "S",
                    "desc": "成功登录的token"
                }, {
                    "name": "usr",
                    "type": "O",
                    "desc": "创建成功的用户对象, 详细查看~/sso/api/uinfo"
                }],
                "desc": "返回通用code/data",
                "example": {
                    "code": 0,
                    "data": {
                        "token": "56ACF73479C0DE596804D024",
                        "usr": {
                            "id": "u14",
                            "last": 1454173753678,
                            "status": 10,
                            "time": 1454173753678,
                            "usr": [
                                "1454173753676"
                            ]
                        }
                    }
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "Exist",
            "title": "检测用户帐号是否已存在",
            "desc": "通过用户名列表检测用户帐号是否已存在\n",
            "tags": [
                "用户",
                "注册",
                "创建",
                "检测"
            ],
            "url": {
                "path": "~/sso/api/exist",
                "method": "GET",
                "desc": "不需求登录，GET请求"
            },
            "arg": {
                "items": [{
                    "name": "usrs",
                    "type": "R",
                    "desc": "用户名列表，如果普通用户名、手机、邮箱等，以逗号分割"
                }],
                "desc": "json对象中的参数",
                "example": "~/sso/api/exist?usrs=a,b,c"
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0：成功，1：参数错误，2：参数太长，3：服务错误。"
                }, {
                    "name": "data.用户名",
                    "type": "I",
                    "desc": "0：不存在（可以使用），1：存在（不可使用）"
                }],
                "desc": "返回通用code/data，data中返回每个用户名是否存在",
                "example": {
                    "code": 0,
                    "data": {
                        "user1": 0,
                        "user2": 1
                    }
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454284800000
            }
        }, {
            "name": "Login",
            "title": "登录",
            "desc": "通过用户名密码登录\n",
            "tags": [
                "用户",
                "登录"
            ],
            "url": {
                "path": "~/sso/api/login",
                "method": "POST",
                "ctype": "application/x-www-form-urlencoded",
                "desc": "不需求登录，form POST请求"
            },
            "arg": {
                "items": [{
                    "name": "pwd",
                    "type": "R",
                    "desc": "用户密码"
                }, {
                    "name": "usr",
                    "type": "R",
                    "desc": "用户名"
                }],
                "desc": "POST参数",
                "example": "usr=abc&pwd=123"
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0：登录成功，1：参数错误，2：用户名或密码不能，3：登录失败"
                }, {
                    "name": "token",
                    "type": "S",
                    "desc": "成功登录的token"
                }, {
                    "name": "usr",
                    "type": "O",
                    "desc": "登录成功的用户对象, 详细查看~/sso/api/uinfo"
                }],
                "desc": "当不使用url参数时，返回通用code/data",
                "example": {
                    "code": 0,
                    "data": {
                        "token": "56ACF73479C0DE596804D024",
                        "usr": {
                            "id": "u14",
                            "last": 1454173753678,
                            "status": 10,
                            "time": 1454173753678,
                            "usr": [
                                "1454173753676"
                            ]
                        }
                    }
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "Logout",
            "title": "注销登录",
            "desc": "通过token或当前cookie注销已经登录的用户\n",
            "tags": [
                "用户",
                "注销"
            ],
            "url": {
                "path": "~/sso/api/logout",
                "method": "GET",
                "desc": "不需求登录，GET请求"
            },
            "arg": {
                "items": [{
                    "name": "token",
                    "type": "O",
                    "desc": "用户登录的token"
                }, {
                    "name": "url",
                    "type": "O",
                    "desc": "注销成功之后的跳转地址"
                }],
                "desc": "普通Query参数",
                "example": "~/sso/api/logout?url=http://xxx"
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0:获取成功,1:未登录"
                }],
                "desc": "当不使用url参数时，返回通用code/data",
                "example": {
                    "code": 0,
                    "data": "OK"
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "Search",
            "title": "搜索用户",
            "desc": "通过关键词搜索指定字段集，并返回指定字段的数据数据，支持多个不同的搜索字段集。\n",
            "tags": [
                "用户",
                "搜索"
            ],
            "url": {
                "path": "~/usr/api/search",
                "method": "GET",
                "desc": "需求登录，GET请求"
            },
            "arg": {
                "items": [{
                    "name": "field",
                    "type": "O",
                    "desc": "字段集，查看支持列表~/usr/api/supported"
                }, {
                    "name": "key",
                    "type": "O",
                    "desc": "关键词，如果为空，返回所有用户"
                }, {
                    "name": "pn",
                    "type": "O",
                    "desc": "分页参数，第几页"
                }, {
                    "name": "ps",
                    "type": "O",
                    "desc": "分页参数，每页条数"
                }, {
                    "name": "selector",
                    "type": "O",
                    "desc": "选择集，查看支持列表~/usr/api/supported"
                }],
                "desc": "普通Query参数",
                "example": "~/usr/api/search?key=测试&field=default&pn=0&ps=20"
            },
            "ret": {
                "items": [{
                    "name": "total",
                    "type": "I",
                    "desc": "搜索结果总数"
                }, {
                    "name": "users",
                    "type": "A",
                    "desc": "用户列表,查看~/sso/api/uinfo查看每个对象参数解释"
                }],
                "desc": "返回结果列表以及总数,能用code/data返回",
                "example": {
                    "code": 0,
                    "data": {
                        "total": 1,
                        "users": [{
                            "id": "u14",
                            "usr": [
                                "1454173753676"
                            ]
                        }]
                    }
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "Supported",
            "title": "获取支持的搜索字段集与返回数据集",
            "desc": "返回当前所有支持的搜索字段集、返回数据集以及对应的描述\n",
            "tags": [
                "用户",
                "搜索",
                "字段集",
                "数据集"
            ],
            "url": {
                "path": "~/sso/api/supported",
                "method": "GET",
                "desc": "需求登录，GET请求"
            },
            "arg": {
                "desc": "不需要参数",
                "example": "~/sso/api/supported"
            },
            "ret": {
                "items": [{
                    "name": "field",
                    "type": "O",
                    "desc": "支持的搜索字段集"
                }, {
                    "name": "selector",
                    "type": "O",
                    "desc": "支持的数据返回集"
                }],
                "desc": "返回普通json数据",
                "example": {
                    "field": {
                        "default": {
                            "desc": "默认",
                            "set": [
                                "usr"
                            ]
                        }
                    },
                    "pub_grp": {
                        "basic": 1
                    },
                    "selector": {
                        "basic": {
                            "desc": "基本字段",
                            "set": {
                                "attrs.basic": 1,
                                "usr": 1
                            }
                        },
                        "default": {
                            "desc": "默认",
                            "set": {
                                "usr": 1
                            }
                        }
                    }
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "Uinfo",
            "title": "获取登录的用户信息",
            "desc": "通过token或当前cookie获取已经登录的用户信息\n",
            "tags": [
                "用户",
                "登录"
            ],
            "url": {
                "path": "~/sso/api/uinfo",
                "method": "GET",
                "desc": "不需求登录，GET请求"
            },
            "arg": {
                "items": [{
                    "name": "token",
                    "type": "O",
                    "desc": "用户登录的token"
                }],
                "desc": "普通Query参数",
                "example": "~/sso/api/uinfo"
            },
            "ret": {
                "items": [{
                    "name": "attrs",
                    "type": "O",
                    "desc": "用户属性列表，按组分类"
                }, {
                    "name": "code",
                    "type": "I",
                    "desc": "0:获取成功,1:未登录"
                }, {
                    "name": "create",
                    "type": "I",
                    "desc": "创建时间"
                }, {
                    "name": "last",
                    "type": "I",
                    "desc": "最后更新时间"
                }, {
                    "name": "token",
                    "type": "S",
                    "desc": "登录的token"
                }, {
                    "name": "usr",
                    "type": "O",
                    "desc": "已经登录的用户信息"
                }, {
                    "name": "usr/usr",
                    "type": "A",
                    "desc": "登录名列表"
                }],
                "desc": "返回能用code/data",
                "example": {
                    "code": 0,
                    "data": {
                        "totken": "56ACEE5179C0DE58DCFFDA58",
                        "usr": {
                            "attrs": {},
                            "id": "u14",
                            "last": 1454173753678,
                            "status": 10,
                            "time": 1454173753678,
                            "usr": [
                                "1454173753676"
                            ]
                        }
                    }
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }, {
            "name": "Uinfo_js",
            "title": "检测用户登录的js",
            "desc": "在目标页面中添加<script>标签实现检测单点登录用户是否已经登录\n",
            "tags": [
                "用户",
                "登录信息",
                "跨域"
            ],
            "url": {
                "path": "user",
                "method": "O",
                "ctype": "是否返回用户信息，0：不返回用户信息，1：返回用户信息",
                "desc": "不需求登录，GET请求"
            },
            "arg": {
                "desc": "<script>标签",
                "example": "<script src=\"~/sso/api/uinfo.js\"></script>"
            },
            "ret": {
                "items": [{
                    "name": "UINFO",
                    "type": "O",
                    "desc": "返回数据对象"
                }, {
                    "name": "UINFO.err",
                    "type": "S",
                    "desc": "检测用户用户失败信息，如果不为空时，usr为空"
                }, {
                    "name": "UINFO.token",
                    "type": "S",
                    "desc": "已经登录用户的token，未登录时为空"
                }, {
                    "name": "UINFO.uid",
                    "type": "S",
                    "desc": "已经登录用户id，未登录时为空"
                }, {
                    "name": "UINFO.usr",
                    "type": "O",
                    "desc": "已经登录用户的信息，未登录时为空"
                }],
                "desc": "返回js代码",
                "example": "var UINFO = {\"token\":\"56B17CF879C0DEA8C8D05132\",\"usr\":{\"id\":\"u4\",\"usr\":[\"testing\"],\"status\":10,\"last\":1454472061855,\"time\":1454472061855}};"
            },
            "author": {
                "name": "wensh",
                "date": 1454457600000
            }
        }, {
            "name": "Update",
            "title": "更新用户",
            "desc": "通过用户对象的相关字段更新用户\n",
            "tags": [
                "用户",
                "更新"
            ],
            "url": {
                "path": "~/usr/api/update",
                "method": "POST",
                "ctype": "application/json",
                "desc": "需求登录，POST请求"
            },
            "arg": {
                "items": [{
                    "name": "attrs",
                    "type": "O",
                    "desc": "用户自定义属性，以组的形式保存。~/sso/api/suppored中获取支持用户组"
                }, {
                    "name": "pwd",
                    "type": "O",
                    "desc": "用户密码"
                }, {
                    "name": "usr",
                    "type": "O",
                    "desc": "用户名列表，如果普通用户名、手机、邮箱等，仅用于添加登录名"
                }],
                "desc": "json对象中的参数以及query中参数",
                "example": {
                    "attrs": {
                        "basic": {
                            "email": "xxx@xx.com",
                            "phone": "12345678901"
                        }
                    },
                    "id": "u14",
                    "last": 1454173753678,
                    "status": 10,
                    "time": 1454173753678,
                    "usr": [
                        "1454173753676"
                    ]
                }
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0：登录成功，1：json body错误，2：更新用户失败"
                }, {
                    "name": "token",
                    "type": "S",
                    "desc": "成功登录的token"
                }, {
                    "name": "usr",
                    "type": "O",
                    "desc": "创建成功的用户对象, 详细查看~/sso/api/uinfo"
                }],
                "desc": "返回通用code/data",
                "example": {
                    "code": 0,
                    "data": "OK"
                }
            },
            "author": {
                "name": "wensh",
                "date": 1454198400000
            }
        }]
    }, {
        "name": "w.gdy.io/dyf/uas/ucs/tlogin",
        "funcs": [{
            "name": "Tlogin",
            "title": "检测第三方用户是否注册",
            "desc": "检测第三方id是否已经注册,已注册的自动登录;未注册的保存信息,自动登录\n",
            "tags": [
                "用户",
                "登录",
                "第三方"
            ],
            "url": {
                "path": "~/sso/api/third-login",
                "method": "POST",
                "ctype": "application/json",
                "desc": "不需求登录，POST请求"
            },
            "arg": {
                "desc": "json对象中的参数以及query中参数",
                "example": "R_ID_THIRD\t        O\t第三方登陆返回的id(微信登录不是必填)\n\taccess_token\t\tO\t第三方登陆返回的access_token(微信登录不是必填)\n\tR_ID_THIRD_TYPE\t\tR\t第三方类型  新浪:SINA  微信:WECHAT QQ:QQ\n\tcode\t            O\t微信登陆code\n\n\t样例\n\t{\n\t    \"R_ID_THIRD\":\"992020\",\n\t    \"access_token\":\"eiisdskaldifensalskdnsnaurifnf\",\n\t\t\"R_ID_THIRD_TYPE\": \"SINA\",\n\t\t\"code\": \"\"\n\t}"
            },
            "ret": {
                "items": [{
                    "name": "code",
                    "type": "I",
                    "desc": "0：登录成功，1：参数错误，2：用户名或密码不能，3：登录失败"
                }, {
                    "name": "token",
                    "type": "S",
                    "desc": "成功登录的token"
                }, {
                    "name": "usr",
                    "type": "O",
                    "desc": "登录成功的用户对象, 详细查看~/sso/api/uinfo"
                }],
                "desc": "当不使用url参数时，返回通用code/data",
                "example": {
                    "code": 0,
                    "data": {
                        "token": "56ACF73479C0DE596804D024",
                        "usr": {
                            "id": "u14",
                            "last": 1454173753678,
                            "status": 10,
                            "time": 1454173753678,
                            "usr": [
                                "1454173753676"
                            ]
                        }
                    }
                }
            },
            "author": {
                "name": "zhangqc",
                "date": 1455494400000
            }
        }]
    }, {
        "name": "w.gdy.io/dyf/url/urlapi",
        "funcs": [{
            "name": "Redirect"
        }]
    }, {
        "name": "w.gdy.io/dyf/wcms/artapi",
        "funcs": [{
            "name": "CreateArticle",
            "title": "创建课程内容",
            "desc": "通过oid/owner/type创建课程内容\n",
            "tags": [
                "课程内容",
                "创建"
            ],
            "url": {
                "path": "~/art/api/create?oid=xxx&owner=xx",
                "method": "GET",
                "desc": "需求登录，GET请求"
            },
            "arg": {
                "items": [{
                    "name": "demo",
                    "type": "O",
                    "desc": "是否创建样例课程，0不创建样例，1创建样例"
                }, {
                    "name": "oid",
                    "type": "R",
                    "desc": "课程内容所属id"
                }, {
                    "name": "owner",
                    "type": "R",
                    "desc": "课程内容所属对象"
                }, {
                    "name": "type",
                    "type": "R",
                    "desc": "课程内容类型"
                }, {
                    "name": "uinfo",
                    "type": "O",
                    "desc": "用户扩展信息"
                }],
                "desc": "普通Query参数"
            },
            "ret": {
                "desc": "通用code/data返回,与加载课程返回article返回数据相同",
                "example": "查看加载课程内容接口"
            },
            "author": {
                "name": "wensh"
            }
        }, {
            "name": "LoadArticle",
            "title": "handle function to load article by item list, item type, the number of item on begin/end of article and multi selector"
        }, {
            "name": "UpdateArticle",
            "title": "更新课程内容",
            "desc": "通过artdb.Article的json数据对象字段更新课程内容\n",
            "tags": [
                "课程内容",
                "更新"
            ],
            "url": {
                "path": "~/art/api/load?aid=xxx",
                "method": "POST",
                "ctype": "application/json",
                "desc": "需求登录，POST请求"
            },
            "arg": {
                "desc": "json数据，详细查看加载课程内容的返回说明",
                "example": "与加载课程内容的返回相同"
            },
            "ret": {
                "items": [{
                    "name": "art",
                    "type": "O",
                    "desc": "已经更新后的article对象"
                }, {
                    "name": "gidm",
                    "type": "O",
                    "desc": "本地收费组id对应保存后的id"
                }, {
                    "name": "iidm",
                    "type": "O",
                    "desc": "本地item id对应保存后的id"
                }],
                "desc": "通用code/data返回",
                "example": {
                    "code": 0,
                    "data": {
                        "gidm": {
                            "l0": "i0",
                            "l1": "i1"
                        },
                        "iidm": {
                            "l2": "i2",
                            "l3": "i3"
                        }
                    }
                }
            },
            "author": {
                "name": "wensh",
                "desc": " need login"
            }
        }]
    }]
};