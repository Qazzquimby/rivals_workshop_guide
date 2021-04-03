(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{413:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rivals-workshop-assistant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rivals-workshop-assistant"}},[t._v("#")]),t._v(" Rivals Workshop Assistant")]),t._v(" "),a("p",[t._v("The Assistant is a tool that looks at your mod files, and does all sorts of things automatically to save you time. There\nare a lot of ways Rivals modding could be easier, and the Assistant is meant to let you focus more on making content,\nand less on handling the language.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/assistant/installation.html"}},[t._v("Installation")])],1),t._v(" "),a("h2",{attrs:{id:"function-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-library"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"function_library"}},[t._v("Function library")])]),t._v(" "),a("p",[t._v("User functions in the form of "),a("code",[t._v("#define")]),t._v(" blocks are very helpful, but they can't be used across files. The Assistant\nsolves this by automatically copying define and macro definitions to the files they're used in.")]),t._v(" "),a("p",[a("br"),t._v("\nIn addition to accessing your own defines across files, you can also use a community library, automatically updated as\nit grows.")]),t._v(" "),a("p",[t._v("The library provides shorthands such as:")]),t._v(" "),a("div",{staticClass:"language-gml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-gml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Old")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_window_value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AT_FAIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AG_WINDOW_TYPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_window_value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AT_FAIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AG_WINDOW_LENGTH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_window_value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AT_FAIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AG_WINDOW_ANIM_FRAMES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// New")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make_window")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AT_FAIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    AG_WINDOW_TYPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    AG_WINDOW_LENGTH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    AG_WINDOW_ANIM_FRAMES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("and helper functions like:")]),t._v(" "),a("div",{staticClass:"language-gml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-gml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Old")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" window_timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" !hitpause "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Don't forget to check hitpause...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// New")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("window_time_is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Old")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My value: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" %"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// New")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My value:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"code-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-injection"}},[t._v("#")]),t._v(" Code injection")]),t._v(" "),a("p",[t._v("Beyond providing functions, the Assistant can generate code for you based on a seed.")]),t._v(" "),a("div",{staticClass:"language-gml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-gml"}},[a("code",[t._v("$foreach weapons$ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You type this.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Assistant replaces it with this:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" weapon_i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" weapon_i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("array_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weapons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" weapon_i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" weapon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weapons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("weapon_i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Right now "),a("code",[t._v("$foreach <collection_name>$")]),t._v(" is the only code injection, but there are many ways this can be exanded.")]),t._v(" "),a("h2",{attrs:{id:"asset-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asset-generation"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/assistant/asset_generation.html"}},[t._v("Asset Generation")])],1),t._v(" "),a("p",[t._v("The Assistant can help you mock-up projectiles and articles by automatically generating placeholder sprites for them.")]),t._v(" "),a("p",[t._v("Any time you try to use a sprite the Assistant understands, the Assistant will quickly draw it up for you, and it'll be\nin game when you press f5.")]),t._v(" "),a("div",{staticClass:"language-gml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-gml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asset_get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red_circle_20"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A 20px diameter red circle")]),t._v("\n")])])]),a("p",[t._v("The Assistant can make "),a("code",[t._v("circle")]),t._v(", "),a("code",[t._v("ellipse")]),t._v(", and "),a("code",[t._v("rect")]),t._v(", with optional colors.")]),t._v(" "),a("p",[t._v("Examples:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"circle_22"')])]),t._v(" "),a("li",[a("code",[t._v('"blue_circle_30"')])]),t._v(" "),a("li",[a("code",[t._v('"ellipse_30_30"')])]),t._v(" "),a("li",[a("code",[t._v('"red_ellipse_30_30"')])]),t._v(" "),a("li",[a("code",[t._v('"rect_34_36"')])]),t._v(" "),a("li",[a("code",[t._v('"orange_rect_3_5"')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);