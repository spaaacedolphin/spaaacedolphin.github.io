//--><![CDATA[//><!--

// START JAVASCRIPT
;(function() {;
var ρσ_modules = {};
var num_celest, celest, inputs, N_body_start_btn, CR3BP_start_btn, spheres, simulation_mode, num_input;
ρσ_modules.pythonize = {};

(function(){
    function strings() {
        var string_funcs, exclude, name;
        string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
        if (!arguments.length) {
            exclude = (function(){
                var s = ρσ_set();
                s.jsset.add("split");
                s.jsset.add("replace");
                return s;
            })();
        } else if (arguments[0]) {
            exclude = Array.prototype.slice.call(arguments);
        } else {
            exclude = null;
        }
        if (exclude) {
            string_funcs = string_funcs.difference(set(exclude));
        }
        var ρσ_Iter0 = string_funcs;
        ρσ_Iter0 = ((typeof ρσ_Iter0[Symbol.iterator] === "function") ? (ρσ_Iter0 instanceof Map ? ρσ_Iter0.keys() : ρσ_Iter0) : Object.keys(ρσ_Iter0));
        for (var ρσ_Index0 of ρσ_Iter0) {
            name = ρσ_Index0;
            (ρσ_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name];
        }
    };
    if (!strings.__module__) Object.defineProperties(strings, {
        __module__ : {value: "pythonize"}
    });

    ρσ_modules.pythonize.strings = strings;
})();
async function __main__() {
"use strict";
    var display = canvas;
    var scene = canvas();

    function input(arg) {
      arg = arg || {}
      if (arg.prompt !== undefined && arg.prompt != '') return prompt(arg.prompt)
      else if (typeof arg === 'string') return prompt(arg)
      else return prompt()
    }

    var version, print, arange, __name__, type, ρσ_ls, x_axis, y_axis, z_axis, color_choices, colors, N_body_radio, CR3BP_radio;
    version = ρσ_list_decorate([ "3.2", "glowscript" ]);
    Array.prototype['+'] = function(r) {return this.concat(r)}
    Array.prototype['*'] = function(r) {return __array_times_number(this, r)}
    window.__GSlang = "vpython";
    print = GSprint;
    arange = range;
    __name__ = "__main__";
    type = pytype;
    var strings = ρσ_modules.pythonize.strings;

    strings();
    "2";
    x_axis = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), axis: vec(1, 0, 0), color: color.red})]);
    "3";
    y_axis = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), axis: vec(0, 1, 0), color: color.green})]);
    "4";
    z_axis = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), axis: vec(0, 0, 1), color: color.blue})]);
    "5";
    ρσ_interpolate_kwargs.call(scene.camera, scene.camera.rotate, [ρσ_desugar_kwargs({angle: pi["/"](2), axis: vec(1, 0, 0), origin: vec(0, 0, 0)})]);
    "7";
    color_choices = ρσ_list_decorate([ "white", "red", "green", "blue", "cyan", "magenta", "yellow", "orange", "purple", "black" ]);
    "8";
    colors = ρσ_list_decorate([ color.white, color.red, color.green, color.blue, color.cyan, color.magenta, color.yellow, color.orange, color.purple, color.black ]);
    "10";
    function Celesetial() {;
    }
    Celesetial.prototype.__init__ = async function __init__() {
        var self = this;
        "12";
        self.name = "unnamed";
        "13";
        self.color = color.white;
        "14";
        self.radius = 1;
        "15";
        self.mass = 0;
        "16";
        self.pos = vec(0, 0, 0);
        "17";
        self.vel = vec(0, 0, 0);
        "18";
        self.acc = vec(0, 0, 0);
    };
    if (!Celesetial.prototype.__init__.__module__) Object.defineProperties(Celesetial.prototype.__init__, {
        __module__ : {value: null}
    });
    Celesetial.__argnames__ = Celesetial.prototype.__init__.__argnames__;
    Celesetial.__handles_kwarg_interpolation__ = Celesetial.prototype.__init__.__handles_kwarg_interpolation__;
    Celesetial.prototype.__repr__ = async function __repr__() {
                return "<"["+"](__name__)["+"](".")["+"](this.constructor.name)["+"](" #")["+"](this.ρσ_object_id)["+"](">");
    };
    Celesetial.prototype.__str__ = async function __str__() {
        return this.__repr__();
    };
    Object.defineProperty(Celesetial.prototype, "__bases__", {value: []});


    "20";
    async function doNothing() {
        "21";
        return;
    };
    if (!doNothing.__module__) Object.defineProperties(doNothing, {
        __module__ : {value: null}
    });

    "23";
    function N_body_Data_input() {;
    }
    N_body_Data_input.prototype.__init__ = async function __init__() {
        var self = this;
        (await sleep(.1));
        "25";
        self.name_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "string"})]);
        "26";
        self.color_input = ρσ_interpolate_kwargs.call(this, menu, [ρσ_desugar_kwargs({bind: doNothing, choices: color_choices})]);
        (await sleep(.1));
        "27";
        self.radius_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, text: "1", type: "numeric"})]);
        (await sleep(.1));
        "28";
        self.mass_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "29";
        self.init_posx_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "30";
        self.init_posy_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "31";
        self.init_posz_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "32";
        self.init_velx_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "33";
        self.init_vely_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "34";
        self.init_velz_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        "35";
        scene.append_to_caption("\n");
    };
    if (!N_body_Data_input.prototype.__init__.__module__) Object.defineProperties(N_body_Data_input.prototype.__init__, {
        __module__ : {value: null}
    });
    N_body_Data_input.__argnames__ = N_body_Data_input.prototype.__init__.__argnames__;
    N_body_Data_input.__handles_kwarg_interpolation__ = N_body_Data_input.prototype.__init__.__handles_kwarg_interpolation__;
    N_body_Data_input.prototype.__repr__ = async function __repr__() {
                return "<"["+"](__name__)["+"](".")["+"](this.constructor.name)["+"](" #")["+"](this.ρσ_object_id)["+"](">");
    };
    N_body_Data_input.prototype.__str__ = async function __str__() {
        return this.__repr__();
    };
    Object.defineProperty(N_body_Data_input.prototype, "__bases__", {value: []});


    "37";
    function CR3BP_Data_input() {;
    }
    CR3BP_Data_input.prototype.__init__ = async function __init__() {
        var self = this;
        "39";
        scene.append_to_caption("\n");
        "40";
        scene.append_to_caption("name\t\tcolor\t\tradius\t\tmass");
        "41";
        scene.append_to_caption("\n");
        (await sleep(.1));
        "43";
        self.name_01_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "string"})]);
        "44";
        self.color_01_input = ρσ_interpolate_kwargs.call(this, menu, [ρσ_desugar_kwargs({bind: doNothing, choices: color_choices})]);
        (await sleep(.1));
        "45";
        self.radius_01_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, text: "1", type: "numeric"})]);
        (await sleep(.1));
        "46";
        self.mass_01_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        "47";
        scene.append_to_caption(" First body\n");
        (await sleep(.1));
        "49";
        self.name_02_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "string"})]);
        "50";
        self.color_02_input = ρσ_interpolate_kwargs.call(this, menu, [ρσ_desugar_kwargs({bind: doNothing, choices: color_choices})]);
        (await sleep(.1));
        "51";
        self.radius_02_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, text: "1", type: "numeric"})]);
        (await sleep(.1));
        "52";
        self.mass_02_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        "53";
        scene.append_to_caption(" Second body\n");
        "55";
        scene.append_to_caption("\n(Both bodies are initially placed on the x axis. First body on -side, Second body on +side)\n");
        (await sleep(.1));
        "56";
        self.distance_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        "57";
        scene.append_to_caption(" Distance between 2 bodies\n\n");
        "60";
        scene.append_to_caption("[position set method]");
        "61";
        self.pos_method_com_radio = ρσ_interpolate_kwargs.call(this, radio, [ρσ_desugar_kwargs({bind: doNothing, text: "relative to center of mass (0,0,0)", name: "pos_method", checked: true})]);
        "62";
        self.pos_method_body01_radio = ρσ_interpolate_kwargs.call(this, radio, [ρσ_desugar_kwargs({bind: doNothing, text: "relative to first body", name: "pos_method"})]);
        "63";
        self.pos_method_body02_radio = ρσ_interpolate_kwargs.call(this, radio, [ρσ_desugar_kwargs({bind: doNothing, text: "relative to second body", name: "pos_method"})]);
        "64";
        scene.append_to_caption("\n");
        "66";
        scene.append_to_caption("[velocity set method]");
        "67";
        self.vel_method_rotating_radio = ρσ_interpolate_kwargs.call(this, radio, [ρσ_desugar_kwargs({bind: doNothing, text: "in rotating frame of reference", name: "vel_method", checked: true})]);
        "68";
        self.vel_method_inertial_radio = ρσ_interpolate_kwargs.call(this, radio, [ρσ_desugar_kwargs({bind: doNothing, text: "in inertial frame of reference", name: "vel_method"})]);
        "69";
        scene.append_to_caption("\n");
        "71";
        scene.append_to_caption("\n(Third body has 0 mass)\n");
        "72";
        scene.append_to_caption("name\t\tcolor\t\tradius\t\tposx0\t\tposy0\t\tposz0\tvelx0\t\tvely0\t\tvelz0");
        "73";
        scene.append_to_caption("\n");
        (await sleep(.1));
        "74";
        self.name_03_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "string"})]);
        "75";
        self.color_03_input = ρσ_interpolate_kwargs.call(this, menu, [ρσ_desugar_kwargs({bind: doNothing, choices: color_choices})]);
        (await sleep(.1));
        "76";
        self.radius_03_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, text: "1", type: "numeric"})]);
        (await sleep(.1));
        "77";
        self.init_posx_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "78";
        self.init_posy_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "79";
        self.init_posz_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "80";
        self.init_velx_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "81";
        self.init_vely_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
        (await sleep(.1));
        "82";
        self.init_velz_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, type: "numeric"})]);
    };
    if (!CR3BP_Data_input.prototype.__init__.__module__) Object.defineProperties(CR3BP_Data_input.prototype.__init__, {
        __module__ : {value: null}
    });
    CR3BP_Data_input.__argnames__ = CR3BP_Data_input.prototype.__init__.__argnames__;
    CR3BP_Data_input.__handles_kwarg_interpolation__ = CR3BP_Data_input.prototype.__init__.__handles_kwarg_interpolation__;
    CR3BP_Data_input.prototype.__repr__ = async function __repr__() {
                return "<"["+"](__name__)["+"](".")["+"](this.constructor.name)["+"](" #")["+"](this.ρσ_object_id)["+"](">");
    };
    CR3BP_Data_input.prototype.__str__ = async function __str__() {
        return this.__repr__();
    };
    Object.defineProperty(CR3BP_Data_input.prototype, "__bases__", {value: []});


    "84";
    async function set_num_celest(evt) {
        var ρσ_ls, _GS_1, i;
        "85";
        "86";
        num_celest = num_input.number;
        "87";
        "88";
        celest = ρσ_list_decorate([]);
        "89";
        "90";
        inputs = ρσ_list_decorate([]);
        "91";
        scene.caption = str(num_celest)["+"]("-body problem");
        "92";
        scene.append_to_caption("\n\n");
        "93";
        scene.append_to_caption("name\t\tcolor\t\tradius\t\tmass\t\tposx0\t\tposy0\t\tposz0\tvelx0\t\tvely0\t\tvelz0");
        "94";
        scene.append_to_caption("\n");
        "95";
        for (var ρσ_Index1 = 0; ρσ_Index1["<"](num_celest); ρσ_Index1++) {
            i = ρσ_Index1;
            "96";
            _GS_1 = new Celesetial;
            (await _GS_1.__init__());
            celest.append(_GS_1);
            "97";
            _GS_1 = new N_body_Data_input;
            (await _GS_1.__init__());
            inputs.append(_GS_1);
        }
        "98";
        scene.append_to_caption("\n");
        "99";
        "100";
        N_body_start_btn = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: N_body_start, text: "Start Simulation"})]);
    };
    if (!set_num_celest.__argnames__) Object.defineProperties(set_num_celest, {
        __argnames__ : {value: ["evt"]},
        __module__ : {value: null}
    });

    "102";
    async function get_CR3BP_inputs() {
        var ρσ_ls, _GS_1, _GS_2, _GS_3;
        "103";
        "104";
        num_celest = 3;
        "105";
        "106";
        _GS_1 = new Celesetial;
        (await _GS_1.__init__());
        _GS_2 = new Celesetial;
        (await _GS_2.__init__());
        _GS_3 = new Celesetial;
        (await _GS_3.__init__());
        celest = ρσ_list_decorate([ _GS_1, _GS_2, _GS_3 ]);
        "107";
        "108";
        _GS_1 = new CR3BP_Data_input;
        (await _GS_1.__init__());
        inputs = _GS_1;
        "109";
        scene.append_to_caption("\n\n");
        "110";
        "111";
        CR3BP_start_btn = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: CR3BP_start, text: "Start Simulation"})]);
    };
    if (!get_CR3BP_inputs.__module__) Object.defineProperties(get_CR3BP_inputs, {
        __module__ : {value: null}
    });

    "113";
    async function N_body_start(evt) {
        var ρσ_ls, i;
        "114";
        "115";
        spheres = ρσ_list_decorate([]);
        "116";
        N_body_start_btn.remove();
        "117";
        for (var ρσ_Index2 = 0; ρσ_Index2["<"](num_celest); ρσ_Index2++) {
            i = ρσ_Index2;
            "118";
            celest[(typeof i === "number" && i["<"](0)) ? celest.length["+"](i) : i].name = inputs[(typeof i === "number" && i["<"](0)) ? inputs.length["+"](i) : i].name_input.text;
            "119";
            celest[(typeof i === "number" && i["<"](0)) ? celest.length["+"](i) : i].color = colors[ρσ_bound_index(inputs[(typeof i === "number" && i["<"](0)) ? inputs.length["+"](i) : i].color_input.index, colors)];
            "120";
            celest[(typeof i === "number" && i["<"](0)) ? celest.length["+"](i) : i].radius = inputs[(typeof i === "number" && i["<"](0)) ? inputs.length["+"](i) : i].radius_input.number;
            "121";
            celest[(typeof i === "number" && i["<"](0)) ? celest.length["+"](i) : i].mass = inputs[(typeof i === "number" && i["<"](0)) ? inputs.length["+"](i) : i].mass_input.number;
            "122";
            celest[(typeof i === "number" && i["<"](0)) ? celest.length["+"](i) : i].pos = vec(inputs[(typeof i === "number" && i["<"](0)) ? inputs.length["+"](i) : i].init_posx_input.number, inputs[(typeof i === "number" && i["<"](0)) ? inputs.length["+"](i) : i].init_posy_input.number, inputs[(typeof i === "number" && i["<"](0)) ? inputs.length["+"](i) : i].init_posz_input.number);
            "123";
            celest[(typeof i === "number" && i["<"](0)) ? celest.length["+"](i) : i].vel = vec(inputs[(typeof i === "number" && i["<"](0)) ? inputs.length["+"](i) : i].init_velx_input.number, inputs[(typeof i === "number" && i["<"](0)) ? inputs.length["+"](i) : i].init_vely_input.number, inputs[(typeof i === "number" && i["<"](0)) ? inputs.length["+"](i) : i].init_velz_input.number);
            "124";
            spheres.append(ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: celest[(typeof i === "number" && i["<"](0)) ? celest.length["+"](i) : i].pos, radius: celest[(typeof i === "number" && i["<"](0)) ? celest.length["+"](i) : i].radius, color: celest[(typeof i === "number" && i["<"](0)) ? celest.length["+"](i) : i].color, make_trail: true, retain: 1e3})]));
        }
    };
    if (!N_body_start.__argnames__) Object.defineProperties(N_body_start, {
        __argnames__ : {value: ["evt"]},
        __module__ : {value: null}
    });

    "126";
    async function CR3BP_start(evt) {
        "127";
        CR3BP_start_btn.remove();
    };
    if (!CR3BP_start.__argnames__) Object.defineProperties(CR3BP_start, {
        __argnames__ : {value: ["evt"]},
        __module__ : {value: null}
    });

    "129";
    async function set_simulation_mode(evt) {
        "130";
        "131";
        if (N_body_radio.checked) {
            "132";
            simulation_mode = "N-body";
            "133";
            scene.caption = simulation_mode["+"]("\n");
            "135";
            (await sleep(.1));
            "136";
            num_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "Number of Celstial Bodies", type: "numeric"})]);
            "137";
            ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: set_num_celest, text: "Confirm"})]);
            "138";
        } else if (CR3BP_radio.checked) {
            "139";
            simulation_mode = "CR3BP";
            "140";
            scene.caption = simulation_mode["+"]("\n");
            "141";
            (await get_CR3BP_inputs());
        }
    };
    if (!set_simulation_mode.__argnames__) Object.defineProperties(set_simulation_mode, {
        __argnames__ : {value: ["evt"]},
        __module__ : {value: null}
    });

    "143";
    scene.append_to_caption("[Simulation_mode]");
    "144";
    N_body_radio = ρσ_interpolate_kwargs.call(this, radio, [ρσ_desugar_kwargs({bind: doNothing, text: "N-body", name: "simulation_mode", checked: true})]);
    "145";
    CR3BP_radio = ρσ_interpolate_kwargs.call(this, radio, [ρσ_desugar_kwargs({bind: doNothing, text: "CR3BP", name: "simulation_mode"})]);
    "146";
    scene.append_to_caption(" ");
    "147";
    ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: set_simulation_mode, text: "Select"})]);
    "148";
    scene.append_to_caption("\n");
};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT

//--><!]]>
