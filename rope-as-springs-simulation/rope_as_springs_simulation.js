//<!--//--><![CDATA[//><!--

// START JAVASCRIPT
;(function() {;
var ρσ_modules = {};
var pulley_y, k, Ln, c, ball_r, ball_m, left_m, right_m, left_r, right_r, left_len, right_len, graph_enabled, amplitude_scale, retain_value, conditions_set;
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

    var version, print, arange, __name__, type, ρσ_ls, x_axis, y_axis, z_axis, g, dt, pulley_y_input, k_input, Ln_input, c_input, ball_r_input, ball_m_input, left_m_input, right_m_input, left_r_input, right_r_input, left_len_input, right_len_input, graph_enabled_input, amplitude_scale_input, retain_value_input, conditions_set, confirm_btn, _GS_1, pulley_01, pulleys, balls, springs, scene2, displacements, curve_r, i, time, count, time_scale, j, k;
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
    "6";
    g = 9.8;
    "7";
    dt = .001;
    "9";
    function Spring() {;
    }
    Spring.prototype.__init__ = async function __init__(k, Ln, c) {
        var self = this;
        "11";
        self.k = k;
        "12";
        self.Ln = Ln;
        "13";
        self.c = c;
    };
    if (!Spring.prototype.__init__.__argnames__) Object.defineProperties(Spring.prototype.__init__, {
        __argnames__ : {value: ["k", "Ln", "c"]},
        __module__ : {value: null}
    });
    Spring.__argnames__ = Spring.prototype.__init__.__argnames__;
    Spring.__handles_kwarg_interpolation__ = Spring.prototype.__init__.__handles_kwarg_interpolation__;
    Spring.prototype.connect = async function connect(back, front) {
        var self = this;
        "16";
        self.back = back;
        "17";
        self.front = front;
        "18";
        self.L = mag(front.pos["-"](1["*"](back.pos)))["-"](1["*"](back.radius["+"](front.radius)));
        "19";
        self.axis = hat(front.pos["-"](1["*"](back.pos)));
        "20";
        self.L_vel = 0;
        "21";
        self.pos = back.pos["+"](back.radius["*"](self.axis))["+"](front.pos["-"](1["*"](front.radius)["*"](self.axis)))["/"](2);
    };
    if (!Spring.prototype.connect.__argnames__) Object.defineProperties(Spring.prototype.connect, {
        __argnames__ : {value: ["back", "front"]},
        __module__ : {value: null}
    });
    Spring.prototype.get_color = async function get_color() {
        var self = this;
        var ρσ_ls, limit, offset;
        "24";
        limit = 2;
        "25";
        offset = self.L["-"](1["*"](self.Ln))["/"](self.Ln["*"](limit));
        "26";
        return vec(.5["+"](offset), 0, .5["-"](1["*"](offset)));
    };
    if (!Spring.prototype.get_color.__module__) Object.defineProperties(Spring.prototype.get_color, {
        __module__ : {value: null}
    });
    Spring.prototype.make_obj = async function make_obj() {
        var self = this;
        "29";
        self.obj = ρσ_interpolate_kwargs.call(this, helix, [ρσ_desugar_kwargs({pos: self.pos["-"](1["*"](self.L["/"](2))["*"](self.axis)), axis: self.L["*"](self.axis), color: (await self.get_color()), emissive: true, radius: self.Ln})]);
    };
    if (!Spring.prototype.make_obj.__module__) Object.defineProperties(Spring.prototype.make_obj, {
        __module__ : {value: null}
    });
    Spring.prototype.get_hooks_law = async function get_hooks_law() {
        var self = this;
        "32";
        return self.L["-"](1["*"](self.Ln))["*"](self.k);
    };
    if (!Spring.prototype.get_hooks_law.__module__) Object.defineProperties(Spring.prototype.get_hooks_law, {
        __module__ : {value: null}
    });
    Spring.prototype.get_dampening = async function get_dampening() {
        var self = this;
        "35";
        return self.c["*"](self.L_vel);
    };
    if (!Spring.prototype.get_dampening.__module__) Object.defineProperties(Spring.prototype.get_dampening, {
        __module__ : {value: null}
    });
    Spring.prototype.update_spring = async function update_spring() {
        var self = this;
        "38";
        self.L = mag(self.front.pos["-"](1["*"](self.back.pos)))["-"](1["*"](self.back.radius["+"](self.front.radius)));
        "39";
        self.axis = hat(self.front.pos["-"](1["*"](self.back.pos)));
        "40";
        self.L_vel = dot(self.front.vel, self.axis)["-"](1["*"](dot(self.back.vel, self.axis)));
        "41";
        self.pos = self.back.pos["+"](self.back.radius["*"](self.axis))["+"](self.front.pos["-"](1["*"](self.front.radius)["*"](self.axis)))["/"](2);
    };
    if (!Spring.prototype.update_spring.__module__) Object.defineProperties(Spring.prototype.update_spring, {
        __module__ : {value: null}
    });
    Spring.prototype.update_obj = async function update_obj() {
        var self = this;
        "44";
        self.obj.pos = self.pos["-"](1["*"](self.L["/"](2))["*"](self.axis));
        "45";
        self.obj.axis = self.L["*"](self.axis);
        "46";
        self.obj.color = (await self.get_color());
    };
    if (!Spring.prototype.update_obj.__module__) Object.defineProperties(Spring.prototype.update_obj, {
        __module__ : {value: null}
    });
    Spring.prototype.__repr__ = async function __repr__() {
                return "<"["+"](__name__)["+"](".")["+"](this.constructor.name)["+"](" #")["+"](this.ρσ_object_id)["+"](">");
    };
    Spring.prototype.__str__ = async function __str__() {
        return this.__repr__();
    };
    Object.defineProperty(Spring.prototype, "__bases__", {value: []});









    "48";
    function Ball() {;
    }
    Ball.prototype.__init__ = async function __init__(pos, mass, radius) {
        var self = this;
        "50";
        self.pos = pos;
        "51";
        self.vel = vec(0, 0, 0);
        "52";
        self.acc = vec(0, 0, 0);
        "53";
        self.mass = mass;
        "54";
        self.radius = radius;
    };
    if (!Ball.prototype.__init__.__argnames__) Object.defineProperties(Ball.prototype.__init__, {
        __argnames__ : {value: ["pos", "mass", "radius"]},
        __module__ : {value: null}
    });
    Ball.__argnames__ = Ball.prototype.__init__.__argnames__;
    Ball.__handles_kwarg_interpolation__ = Ball.prototype.__init__.__handles_kwarg_interpolation__;
    Ball.prototype.connect = async function connect(back, front) {
        var self = this;
        "57";
        self.back = back;
        "58";
        self.front = front;
    };
    if (!Ball.prototype.connect.__argnames__) Object.defineProperties(Ball.prototype.connect, {
        __argnames__ : {value: ["back", "front"]},
        __module__ : {value: null}
    });
    Ball.prototype.make_obj = async function make_obj() {
        var self = this;
        "61";
        self.obj = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: self.pos, radius: self.radius, color: color.yellow})]);
    };
    if (!Ball.prototype.make_obj.__module__) Object.defineProperties(Ball.prototype.make_obj, {
        __module__ : {value: null}
    });
    Ball.prototype.reset_acc = async function reset_acc() {
        var self = this;
        "64";
        self.acc = vec(0, 0, 0);
    };
    if (!Ball.prototype.reset_acc.__module__) Object.defineProperties(Ball.prototype.reset_acc, {
        __module__ : {value: null}
    });
    Ball.prototype.apply_spring_force = async function apply_spring_force() {
        var self = this;
        "67";
        if ((self.back !== "none" && (typeof self.back !== "object" || ρσ_not_equals(self.back, "none")))) {
            "68";
            self.acc = self.acc["+"]((await self.back.get_hooks_law())["*"](1["-u"]())["*"](1)["*"](self.back.axis)["+"]((await self.back.get_dampening())["*"](1["-u"]())["*"](1)["*"](self.back.axis))["/"](self.mass));
            "70";
        }
        if ((self.front !== "none" && (typeof self.front !== "object" || ρσ_not_equals(self.front, "none")))) {
            "71";
            self.acc = self.acc["+"]((await self.front.get_hooks_law())["*"](self.front.axis)["+"]((await self.front.get_dampening())["*"](self.front.axis))["/"](self.mass));
        }
    };
    if (!Ball.prototype.apply_spring_force.__module__) Object.defineProperties(Ball.prototype.apply_spring_force, {
        __module__ : {value: null}
    });
    Ball.prototype.apply_gravity = async function apply_gravity() {
        var self = this;
        "74";
        self.acc = self.acc["+"](vec(0, 1["-u"]()["*"](g), 0));
    };
    if (!Ball.prototype.apply_gravity.__module__) Object.defineProperties(Ball.prototype.apply_gravity, {
        __module__ : {value: null}
    });
    Ball.prototype.apply_normal_force_from_pulley = async function apply_normal_force_from_pulley(pulley) {
        var self = this;
        var ρσ_ls, r_from_center, unit_out_normal_vec, unit_in_normal_vec, in_normal_vel, in_normal_acc;
        "78";
        r_from_center = self.pos["-"](1["*"](pulley.pos));
        "80";
        if (mag(r_from_center)["<="](self.radius["+"](pulley.radius))) {
            "82";
            unit_out_normal_vec = hat(r_from_center);
            "83";
            self.pos = pulley.pos["+"](self.radius["+"](pulley.radius)["*"](unit_out_normal_vec));
            "85";
            unit_in_normal_vec = 1["-u"]()["*"](1)["*"](unit_out_normal_vec);
            "87";
            in_normal_vel = dot(self.vel, unit_in_normal_vec);
            "88";
            if (in_normal_vel[">"](0)) {
                "89";
                self.vel = self.vel["-"](1["*"](in_normal_vel)["*"](unit_in_normal_vec));
            }
            "91";
            in_normal_acc = dot(self.acc, unit_in_normal_vec);
            "92";
            if (in_normal_acc[">"](0)) {
                "93";
                self.acc = self.acc["-"](1["*"](in_normal_acc)["*"](unit_in_normal_vec));
            }
        }
    };
    if (!Ball.prototype.apply_normal_force_from_pulley.__argnames__) Object.defineProperties(Ball.prototype.apply_normal_force_from_pulley, {
        __argnames__ : {value: ["pulley"]},
        __module__ : {value: null}
    });
    Ball.prototype.update_vel = async function update_vel() {
        var self = this;
        "96";
        self.vel = self.vel["+"](self.acc["*"](dt));
    };
    if (!Ball.prototype.update_vel.__module__) Object.defineProperties(Ball.prototype.update_vel, {
        __module__ : {value: null}
    });
    Ball.prototype.update_pos = async function update_pos() {
        var self = this;
        "99";
        self.pos = self.pos["+"](self.vel["*"](dt));
    };
    if (!Ball.prototype.update_pos.__module__) Object.defineProperties(Ball.prototype.update_pos, {
        __module__ : {value: null}
    });
    Ball.prototype.update_obj = async function update_obj() {
        var self = this;
        "102";
        self.obj.pos = self.pos;
    };
    if (!Ball.prototype.update_obj.__module__) Object.defineProperties(Ball.prototype.update_obj, {
        __module__ : {value: null}
    });
    Ball.prototype.__repr__ = async function __repr__() {
                return "<"["+"](__name__)["+"](".")["+"](this.constructor.name)["+"](" #")["+"](this.ρσ_object_id)["+"](">");
    };
    Ball.prototype.__str__ = async function __str__() {
        return this.__repr__();
    };
    Object.defineProperty(Ball.prototype, "__bases__", {value: []});











    "104";
    function Pulley() {;
    }
    Pulley.prototype.__init__ = async function __init__(pos, radius) {
        var self = this;
        "106";
        self.pos = pos;
        "107";
        self.radius = radius;
        "108";
        self.obj = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: self.pos["+"](vec(0, 0, 1["-u"]()["*"](.5))), axis: vec(0, 0, 1), radius: self.radius})]);
    };
    if (!Pulley.prototype.__init__.__argnames__) Object.defineProperties(Pulley.prototype.__init__, {
        __argnames__ : {value: ["pos", "radius"]},
        __module__ : {value: null}
    });
    Pulley.__argnames__ = Pulley.prototype.__init__.__argnames__;
    Pulley.__handles_kwarg_interpolation__ = Pulley.prototype.__init__.__handles_kwarg_interpolation__;
    Pulley.prototype.__repr__ = async function __repr__() {
                return "<"["+"](__name__)["+"](".")["+"](this.constructor.name)["+"](" #")["+"](this.ρσ_object_id)["+"](">");
    };
    Pulley.prototype.__str__ = async function __str__() {
        return this.__repr__();
    };
    Object.defineProperty(Pulley.prototype, "__bases__", {value: []});


    "110";
    async function doNothing() {
        "111";
        return;
    };
    if (!doNothing.__module__) Object.defineProperties(doNothing, {
        __module__ : {value: null}
    });

    (await sleep(.1));
    "114";
    pulley_y_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "pulley_y (height of pulley): ", text: "10", type: "numeric"})]);
    "115";
    scene.append_to_caption("\n");
    (await sleep(.1));
    "117";
    k_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "k (spring constant): ", text: "1000", type: "numeric"})]);
    "118";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "119";
    Ln_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "Ln (natural length of spring): ", text: "0.04", type: "numeric"})]);
    "120";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "121";
    c_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "c (dampening factor): ", text: "1", type: "numeric"})]);
    "122";
    scene.append_to_caption("\n");
    (await sleep(.1));
    "124";
    ball_r_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "ball_r (radius of rope particle): ", text: "0.02", type: "numeric"})]);
    "125";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "126";
    ball_m_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "ball_m (mass of rope particle): ", text: "0.01", type: "numeric"})]);
    "127";
    scene.append_to_caption("\n");
    (await sleep(.1));
    "129";
    left_m_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "left_m (mass of weight on the left end): ", text: "0.1", type: "numeric"})]);
    "130";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "131";
    right_m_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "right_m (mass of weight on the right end): ", text: "0.2", type: "numeric"})]);
    "132";
    scene.append_to_caption("\n");
    (await sleep(.1));
    "134";
    left_r_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "left_r (radius of weight on the left end): ", text: "0.5", type: "numeric"})]);
    "135";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "136";
    right_r_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "right_r (radius of weight on the right end): ", text: "0.7", type: "numeric"})]);
    "137";
    scene.append_to_caption("\n");
    (await sleep(.1));
    "139";
    left_len_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "left_len (length of rope on the left side): ", text: "10", type: "numeric"})]);
    "140";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "141";
    right_len_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "right_len (length of rope on the right side): ", text: "10", type: "numeric"})]);
    "142";
    scene.append_to_caption("\n");
    "144";
    async function toggle_graph_input(evt) {
        "145";
        if (evt.checked) {
            "146";
            amplitude_scale_input.disabled = false;
            "147";
            retain_value_input.disabled = false;
            "148";
        } else {
            "149";
            amplitude_scale_input.disabled = true;
            "150";
            retain_value_input.disabled = true;
        }
    };
    if (!toggle_graph_input.__argnames__) Object.defineProperties(toggle_graph_input, {
        __argnames__ : {value: ["evt"]},
        __module__ : {value: null}
    });

    "152";
    graph_enabled_input = ρσ_interpolate_kwargs.call(this, checkbox, [ρσ_desugar_kwargs({bind: toggle_graph_input, text: "Draw displacement graph"})]);
    "153";
    scene.append_to_caption("\n");
    (await sleep(.1));
    "155";
    amplitude_scale_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "amplitude_scale: ", text: "10000", type: "numeric"})]);
    "156";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "157";
    retain_value_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "retain (-1 for infinite): ", text: "-1", type: "numeric"})]);
    "158";
    amplitude_scale_input.disabled = true;
    "159";
    retain_value_input.disabled = true;
    "160";
    scene.append_to_caption("\t");
    "162";
    conditions_set = false;
    "164";
    async function none_to_default(x) {
        "165";
        if (x.number === null) {
            "166";
            return float(x.text);
            "167";
        } else {
            "168";
            return x.number;
        }
    };
    if (!none_to_default.__argnames__) Object.defineProperties(none_to_default, {
        __argnames__ : {value: ["x"]},
        __module__ : {value: null}
    });

    "170";
    async function setConditions(evt) {
        "171";
        "172";
        "173";
        "174";
        "175";
        "176";
        "177";
        "178";
        "179";
        "180";
        "181";
        "182";
        "183";
        "184";
        pulley_y = (await none_to_default(pulley_y_input));
        "185";
        k = (await none_to_default(k_input));
        "186";
        Ln = (await none_to_default(Ln_input));
        "187";
        c = (await none_to_default(c_input));
        "188";
        ball_r = (await none_to_default(ball_r_input));
        "189";
        ball_m = (await none_to_default(ball_m_input));
        "190";
        left_m = (await none_to_default(left_m_input));
        "191";
        right_m = (await none_to_default(right_m_input));
        "192";
        left_r = (await none_to_default(left_r_input));
        "193";
        right_r = (await none_to_default(right_r_input));
        "194";
        left_len = (await none_to_default(left_len_input));
        "195";
        right_len = (await none_to_default(right_len_input));
        "196";
        graph_enabled = graph_enabled_input.checked;
        "197";
        if (graph_enabled) {
            "198";
            "199";
            "200";
            amplitude_scale = (await none_to_default(amplitude_scale_input));
            "201";
            retain_value = (await none_to_default(retain_value_input));
        }
        "202";
        "203";
        conditions_set = true;
    };
    if (!setConditions.__argnames__) Object.defineProperties(setConditions, {
        __argnames__ : {value: ["evt"]},
        __module__ : {value: null}
    });

    "205";
    confirm_btn = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: setConditions, text: "confirm"})]);
    "207";
    while (true) {
        "208";
        (await rate(10));
        "209";
        if (conditions_set) {
            "210";
            scene.caption = "";
            "211";
            break;
        }
    }
    "213";
    _GS_1 = new Pulley;
    (await _GS_1.__init__(vec(0, pulley_y, 0), 1));
    pulley_01 = _GS_1;
    "214";
    pulleys = ρσ_list_decorate([ pulley_01 ]);
    "215";
    balls = ρσ_list_decorate([]);
    "216";
    springs = ρσ_list_decorate([]);
    "218";
    async function make_rope_on_pulley(pulley, left_m, right_m, left_r, right_r, left_len, right_len) {
        var ρσ_ls, unit_len, left_n, left_start_pos, _GS_1, i, dtheta, theta, cur_pos, right_n, right_start_pos;
        "219";
        unit_len = Ln["+"](2["*"](ball_r));
        "222";
        left_n = int(left_len["-"](1["*"](ball_r))["/"](unit_len));
        "223";
        left_start_pos = pulley.pos["+"](vec(1["-u"]()["*"](pulley.radius["+"](ball_r)), 0, 0));
        "224";
        _GS_1 = new Ball;
        (await _GS_1.__init__(left_start_pos["+"](vec(0, 1["-u"]()["*"](unit_len)["*"](left_n), 0)), left_m, left_r));
        balls.append(_GS_1);
        "225";
        for (var ρσ_Index1 = 1; ρσ_Index1["<"](left_n); ρσ_Index1=ρσ_Index1["+"](1)) {
            i = ρσ_Index1;
            "226";
            i = left_n["-"](1["*"](i));
            "227";
            _GS_1 = new Ball;
            (await _GS_1.__init__(left_start_pos["+"](vec(0, 1["-u"]()["*"](unit_len)["*"](i), 0)), ball_m, ball_r));
            balls.append(_GS_1);
        }
        "230";
        dtheta = unit_len["/"](pulley.radius);
        "231";
        theta = 0;
        "232";
        while (theta["<="](pi)) {
            "233";
            cur_pos = pulley.pos["+"](vec(1["-u"]()["*"](pulley.radius["+"](ball_r))["*"](cos(theta)), pulley.radius["+"](ball_r)["*"](sin(theta)), 0));
            "234";
            if (cur_pos.y["<"](pulley.pos.y)) {
                "235";
                break;
            }
            "236";
            _GS_1 = new Ball;
            (await _GS_1.__init__(cur_pos, ball_m, ball_r));
            balls.append(_GS_1);
            "237";
            theta=theta["+"](dtheta);
        }
        "240";
        right_n = int(right_len["-"](1["*"](ball_r))["/"](unit_len));
        "241";
        right_start_pos = pulley.pos["+"](vec(pulley.radius["+"](ball_r), 0, 0));
        "242";
        for (var ρσ_Index2 = 0; ρσ_Index2["<"](right_n["-"](1["*"](1))); ρσ_Index2++) {
            i = ρσ_Index2;
            "243";
            i = i["+"](1);
            "244";
            _GS_1 = new Ball;
            (await _GS_1.__init__(right_start_pos["+"](vec(0, 1["-u"]()["*"](unit_len)["*"](i), 0)), ball_m, ball_r));
            balls.append(_GS_1);
        }
        "245";
        _GS_1 = new Ball;
        (await _GS_1.__init__(right_start_pos["+"](vec(0, 1["-u"]()["*"](unit_len)["*"](right_n), 0)), right_m, right_r));
        balls.append(_GS_1);
        "248";
        var ρσ_Iter3 = range(len(balls)["-"](1["*"](1)));
        ρσ_Iter3 = ((typeof ρσ_Iter3[Symbol.iterator] === "function") ? (ρσ_Iter3 instanceof Map ? ρσ_Iter3.keys() : ρσ_Iter3) : Object.keys(ρσ_Iter3));
        for (var ρσ_Index3 of ρσ_Iter3) {
            i = ρσ_Index3;
            "249";
            _GS_1 = new Spring;
            (await _GS_1.__init__(k, Ln, c));
            springs.append(_GS_1);
        }
        "252";
        var ρσ_Iter4 = range(len(springs));
        ρσ_Iter4 = ((typeof ρσ_Iter4[Symbol.iterator] === "function") ? (ρσ_Iter4 instanceof Map ? ρσ_Iter4.keys() : ρσ_Iter4) : Object.keys(ρσ_Iter4));
        for (var ρσ_Index4 of ρσ_Iter4) {
            i = ρσ_Index4;
            "253";
            (await ρσ_getitem(springs, i).connect(ρσ_getitem(balls, i), ρσ_getitem(balls, i["+"](1))));
        }
        "256";
        (await ρσ_getitem(balls, 0).connect("none", ρσ_getitem(springs, 0)));
        "257";
        var ρσ_Iter5 = range(1, len(balls)["-"](1["*"](1)), 1);
        ρσ_Iter5 = ((typeof ρσ_Iter5[Symbol.iterator] === "function") ? (ρσ_Iter5 instanceof Map ? ρσ_Iter5.keys() : ρσ_Iter5) : Object.keys(ρσ_Iter5));
        for (var ρσ_Index5 of ρσ_Iter5) {
            i = ρσ_Index5;
            "258";
            (await ρσ_getitem(balls, i).connect(ρσ_getitem(springs, i["-"](1["*"](1))), ρσ_getitem(springs, i)));
        }
        "259";
        (await ρσ_getitem(balls, 1["-u"]()["*"](1)).connect(ρσ_getitem(springs, 1["-u"]()["*"](1)), "none"));
        "262";
        var ρσ_Iter6 = range(len(springs));
        ρσ_Iter6 = ((typeof ρσ_Iter6[Symbol.iterator] === "function") ? (ρσ_Iter6 instanceof Map ? ρσ_Iter6.keys() : ρσ_Iter6) : Object.keys(ρσ_Iter6));
        for (var ρσ_Index6 of ρσ_Iter6) {
            i = ρσ_Index6;
            "263";
            (await ρσ_getitem(balls, i).make_obj());
            "264";
            (await ρσ_getitem(springs, i).make_obj());
        }
        "265";
        (await ρσ_getitem(balls, 1["-u"]()["*"](1)).make_obj());
    };
    if (!make_rope_on_pulley.__argnames__) Object.defineProperties(make_rope_on_pulley, {
        __argnames__ : {value: ["pulley", "left_m", "right_m", "left_r", "right_r", "left_len", "right_len"]},
        __module__ : {value: null}
    });

    "267";
    (await make_rope_on_pulley(pulley_01, left_m, right_m, left_r, right_r, left_len, right_len));
    "269";
    if (graph_enabled) {
        "270";
        scene2 = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({width: 640, height: 200})]);
        "271";
        ρσ_interpolate_kwargs.call(scene2.camera, scene2.camera.rotate, [ρσ_desugar_kwargs({angle: pi["/"](2), axis: vec(0, 1, 0), origin: vec(0, 0, 0)})]);
        (await sleep(.1));
        "272";
        scene2.autoscale = false;
        "274";
        displacements = ρσ_list_decorate([]);
        "275";
        curve_r = 2;
        "276";
        var ρσ_Iter7 = range(len(springs));
        ρσ_Iter7 = ((typeof ρσ_Iter7[Symbol.iterator] === "function") ? (ρσ_Iter7 instanceof Map ? ρσ_Iter7.keys() : ρσ_Iter7) : Object.keys(ρσ_Iter7));
        for (var ρσ_Index7 of ρσ_Iter7) {
            i = ρσ_Index7;
            "277";
            displacements.append(ρσ_interpolate_kwargs.call(this, curve, [ρσ_desugar_kwargs({pos: ρσ_list_decorate([ vec(0, amplitude_scale["*"](ρσ_getitem(springs, i).L["-"](1["*"](ρσ_getitem(springs, i).Ln))), i["*"](curve_r)) ]), radius: curve_r, color: (await ρσ_getitem(springs, i).get_color()), retain: retain_value, canvas: scene2})]));
        }
        "279";
        scene2.range = .5["*"](len(springs))["*"](curve_r);
    }
    "281";
    ρσ_interpolate_kwargs.call(this, print_options, [ρσ_desugar_kwargs({width: 380, height: 175, digits: 10})]);
    "282";
    print("pulley_y:", pulley_y);
    "283";
    print("k:", k, "\tLn:", Ln, "\tc:", c);
    "284";
    print("ball_r:", ball_r, "\tball_m:", ball_m);
    "285";
    print("left_m:", left_m, "\tright_m:", right_m);
    "286";
    print("left_r:", left_r, "\tright_r:", right_r);
    "287";
    print("left_len:", left_len, "\tright_len:", right_len);
    "288";
    print("graph_enabled:", graph_enabled);
    "289";
    if (graph_enabled) {
        "290";
        print("amplitude_scale:", amplitude_scale, "\tretain_value:", retain_value);
    }
    "292";
    time = 0;
    "293";
    scene.title = "<b>t = "["+"]("{:.3f}".format(time))["+"](" sec<\/b>");
    "295";
    count = 1;
    "296";
    time_scale = 1e3;
    "297";
    while (true) {
        "298";
        (await rate(200));
        "300";
        time = count["*"](dt);
        "301";
        scene.title = "<b>t = "["+"]("{:.3f}".format(time))["+"](" sec</b>");
        "303";
        var ρσ_Iter8 = range(len(balls));
        ρσ_Iter8 = ((typeof ρσ_Iter8[Symbol.iterator] === "function") ? (ρσ_Iter8 instanceof Map ? ρσ_Iter8.keys() : ρσ_Iter8) : Object.keys(ρσ_Iter8));
        for (var ρσ_Index8 of ρσ_Iter8) {
            i = ρσ_Index8;
            "304";
            (await ρσ_getitem(balls, i).reset_acc());
            "305";
            (await ρσ_getitem(balls, i).apply_spring_force());
            "306";
            (await ρσ_getitem(balls, i).apply_gravity());
            "307";
            var ρσ_Iter9 = range(len(pulleys));
            ρσ_Iter9 = ((typeof ρσ_Iter9[Symbol.iterator] === "function") ? (ρσ_Iter9 instanceof Map ? ρσ_Iter9.keys() : ρσ_Iter9) : Object.keys(ρσ_Iter9));
            for (var ρσ_Index9 of ρσ_Iter9) {
                j = ρσ_Index9;
                "308";
                (await ρσ_getitem(balls, i).apply_normal_force_from_pulley(ρσ_getitem(pulleys, j)));
            }
            "309";
            (await ρσ_getitem(balls, i).update_vel());
            "310";
            (await ρσ_getitem(balls, i).update_pos());
            "311";
            (await ρσ_getitem(balls, i).update_obj());
        }
        "313";
        var ρσ_Iter10 = range(len(springs));
        ρσ_Iter10 = ((typeof ρσ_Iter10[Symbol.iterator] === "function") ? (ρσ_Iter10 instanceof Map ? ρσ_Iter10.keys() : ρσ_Iter10) : Object.keys(ρσ_Iter10));
        for (var ρσ_Index10 of ρσ_Iter10) {
            k = ρσ_Index10;
            "314";
            (await ρσ_getitem(springs, k).update_spring());
            "315";
            (await ρσ_getitem(springs, k).update_obj());
            "317";
            if (graph_enabled) {
                "318";
                (ρσ_expr_temp = ρσ_getitem(displacements, k), ρσ_interpolate_kwargs.call(ρσ_expr_temp, ρσ_expr_temp.append, [ρσ_desugar_kwargs({pos: vec(time_scale["*"](time), amplitude_scale["*"](ρσ_getitem(springs, k).L["-"](1["*"](ρσ_getitem(springs, k).Ln))), k["*"](curve_r)), color: (await ρσ_getitem(springs, k).get_color())})]));
                "319";
                scene2.center = vec(time_scale["*"](time), 0, int(len(springs)["/"](2))["*"](curve_r));
            }
        }
        "320";
        count=count["+"](1);
    }
};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT

//--><!]]>
