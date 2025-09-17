// START JAVASCRIPT
;(function() {;
var ρσ_modules = {};
var surface_r, surface_m, ball_r, ball_m, ball_v0, left_len, up_len, conditions_set;
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

    var version, print, arange, __name__, type, ρσ_ls, x_axis, y_axis, z_axis, g, dt, surface_r_input, surface_m_input, left_len_input, up_len_input, ball_r_input, ball_m_input, ball_v0_input, conditions_set, confirm_btn, _GS_1, surface_01, ball_01, time, count, time_scale, acc_graph, acc_func, x_momentum_graph, x_momentum_ball_func, x_momentum_surface_func, x_momentum_total_func, acc_value, ball_01_x_momentum, surface_01_x_momentum;
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
    "3";
    scene.width = 900;
    "5";
    x_axis = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), axis: vec(1, 0, 0), color: color.red})]);
    "6";
    y_axis = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), axis: vec(0, 1, 0), color: color.green})]);
    "7";
    z_axis = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), axis: vec(0, 0, 1), color: color.blue})]);
    "9";
    g = 9.8;
    "10";
    dt = .001;
    "12";
    function Ball() {;
    }
    Ball.prototype.__init__ = async function __init__(pos, vel, mass, radius) {
        var self = this;
        "14";
        self.pos = pos;
        "15";
        self.prev_pos = pos;
        "16";
        self.vel = vel;
        "17";
        self.acc = vec(0, 0, 0);
        "18";
        self.mass = mass;
        "19";
        self.radius = radius;
    };
    if (!Ball.prototype.__init__.__argnames__) Object.defineProperties(Ball.prototype.__init__, {
        __argnames__ : {value: ["pos", "vel", "mass", "radius"]},
        __module__ : {value: null}
    });
    Ball.__argnames__ = Ball.prototype.__init__.__argnames__;
    Ball.__handles_kwarg_interpolation__ = Ball.prototype.__init__.__handles_kwarg_interpolation__;
    Ball.prototype.make_obj = async function make_obj() {
        var self = this;
        "22";
        self.obj = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: self.pos, radius: self.radius, color: color.yellow, make_trail: true, trail_radius: self.radius["*"](.1), nf: vec(0, 0, 0)})]);
        "23";
        ρσ_interpolate_kwargs.call(this, attach_arrow, [self.obj, "nf"].concat([ρσ_desugar_kwargs({scale: .1, shaftwidth: self.radius["*"](.2)})]));
    };
    if (!Ball.prototype.make_obj.__module__) Object.defineProperties(Ball.prototype.make_obj, {
        __module__ : {value: null}
    });
    Ball.prototype.reset_acc = async function reset_acc() {
        var self = this;
        "26";
        self.acc = vec(0, 0, 0);
    };
    if (!Ball.prototype.reset_acc.__module__) Object.defineProperties(Ball.prototype.reset_acc, {
        __module__ : {value: null}
    });
    Ball.prototype.apply_gravity = async function apply_gravity() {
        var self = this;
        "29";
        self.acc = self.acc["+"](vec(0, 1["-u"]()["*"](g), 0));
    };
    if (!Ball.prototype.apply_gravity.__module__) Object.defineProperties(Ball.prototype.apply_gravity, {
        __module__ : {value: null}
    });
    Ball.prototype.apply_normal_force_from_surface = async function apply_normal_force_from_surface(surface) {
        var self = this;
        var ρσ_ls, r_from_center, unit_out_normal_vec, surf_normal_acc_1, out_normal_acc, ball_excess_acc, temp;
        "33";
        r_from_center = self.pos["-"](1["*"](surface.center));
        "35";
        if (mag(r_from_center)[">="](surface.radius["-"](1["*"](self.radius))) && self.pos.x[">"](surface.pos.x) && self.pos.y["<"](surface.radius)) {
            "37";
            unit_out_normal_vec = hat(r_from_center);
            "38";
            self.pos = surface.center["+"](surface.radius["-"](1["*"](self.radius))["*"](unit_out_normal_vec));
            "\n            out_normal_vel = dot(self.vel,unit_out_normal_vec)\n            if out_normal_vel>0:\n                self.vel = self.vel - out_normal_vel*unit_out_normal_vec\n            ";
            "45";
            self.vel = self.pos["-"](1["*"](self.prev_pos))["/"](dt);
            "46";
            surf_normal_acc_1 = 1["-u"]()["*"](self.mass)["/"](surface.mass)["*"](self.vel.x["-"](1["*"](ball_v0)))["-"](1["*"](surface.vel.x))["/"](dt)["*"](vec(1, 0, 0));
            "47";
            surface.acc = surface.acc["+"](surf_normal_acc_1);
            "\n            unit_tangent_vec = cross(vec(0,0,1),unit_out_normal_vec)\n            self.vel = mag(self.vel)*unit_tangent_vec\n            ";
            "53";
            out_normal_acc = dot(self.acc, unit_out_normal_vec);
            "55";
            if (out_normal_acc[">"](0)) {
                "56";
                ball_excess_acc = out_normal_acc["*"](unit_out_normal_vec);
                "57";
                self.acc = self.acc["-"](1["*"](ball_excess_acc));
                "59";
                self.obj.nf = 1["-u"]()["*"](self.mass)["*"](ball_excess_acc);
                "60";
                return (await surface.apply_normal_force_from_ball(self.mass["*"](ball_excess_acc)));
            }
            "\n            if out_normal_acc>out_normal_surf_acc:\n                self.acc = self.acc - (out_normal_acc-out_normal_surf_acc)*unit_out_normal_vec\n            \n            displacement_dt = self.pos - r_from_center + surface.center\n            vel_dt = displacement_dt / dt\n            acc_dt = (vel_dt-self.vel)/dt\n            self.acc = self.acc + acc_dt\n            ";
            "76";
        }
        if (self.pos.x[">"](surface.pos.x["-"](1["*"](surface.left_len))) && self.pos.x["<="](surface.pos.x)) {
            "77";
            if (self.pos.y["<"](self.radius)) {
                "78";
                self.pos.y = self.radius;
                "79";
                if (self.vel.y["<"](0)) {
                    "80";
                    self.vel.y = 0;
                    "81";
                }
                if (self.acc.y["<"](0)) {
                    "82";
                    self.acc.y = 0;
                }
                "83";
                return 0;
                "85";
            }
        }
        if (self.pos.y[">="](self.radius) && self.pos.y["<"](surface.radius["+"](surface.up_len))) {
            "86";
            if (self.pos.x[">"](surface.pos.x["+"](surface.radius)["-"](1["*"](self.radius)))) {
                "87";
                self.pos.x = surface.pos.x["+"](surface.radius)["-"](1["*"](self.radius));
                "88";
                if (self.vel.x[">"](surface.vel.x)) {
                    "89";
                    self.vel.x = surface.vel.x;
                    "90";
                }
                if (self.acc.x[">"](0)) {
                    "91";
                    temp = self.acc;
                    "92";
                    self.acc.x = 0;
                    "93";
                    return (await surface.apply_normal_force_from_ball(self.mass["*"](temp)));
                }
            }
        }
        "94";
        self.obj.nf = vec(0, 0, 0);
        "95";
        return 0;
    };
    if (!Ball.prototype.apply_normal_force_from_surface.__argnames__) Object.defineProperties(Ball.prototype.apply_normal_force_from_surface, {
        __argnames__ : {value: ["surface"]},
        __module__ : {value: null}
    });
    Ball.prototype.update_vel = async function update_vel() {
        var self = this;
        "99";
        self.vel = self.vel["+"](self.acc["*"](dt));
    };
    if (!Ball.prototype.update_vel.__module__) Object.defineProperties(Ball.prototype.update_vel, {
        __module__ : {value: null}
    });
    Ball.prototype.update_pos = async function update_pos() {
        var self = this;
        "102";
        self.prev_pos = self.pos;
        "103";
        self.pos = self.pos["+"](self.vel["*"](dt));
    };
    if (!Ball.prototype.update_pos.__module__) Object.defineProperties(Ball.prototype.update_pos, {
        __module__ : {value: null}
    });
    Ball.prototype.update_obj = async function update_obj() {
        var self = this;
        "106";
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
    
    
    
    
    
    
    
    

    "109";
    async function arc_shape(r, start, end) {
        var ρσ_ls, output, dtheta, theta;
        "110";
        output = ρσ_list_decorate([]);
        "111";
        dtheta = .01;
        "112";
        theta = start["+"](dtheta);
        "113";
        while (theta["<"](end)) {
            "114";
            output.append(ρσ_list_decorate([ r["*"](cos(theta)), r["*"](sin(theta)) ]));
            "115";
            theta=theta["+"](dtheta);
        }
        "116";
        return output;
    };
    if (!arc_shape.__argnames__) Object.defineProperties(arc_shape, {
        __argnames__ : {value: ["r", "start", "end"]},
        __module__ : {value: null}
    });

    "118";
    async function move_shape(shape, s) {
        var ρσ_ls, i;
        "119";
        var ρσ_Iter1 = range(len(shape));
        ρσ_Iter1 = ((typeof ρσ_Iter1[Symbol.iterator] === "function") ? (ρσ_Iter1 instanceof Map ? ρσ_Iter1.keys() : ρσ_Iter1) : Object.keys(ρσ_Iter1));
        for (var ρσ_Index1 of ρσ_Iter1) {
            i = ρσ_Index1;
            "120";
            shape[(typeof i === "number" && i["<"](0)) ? shape.length["+"](i) : i][0] = shape[(typeof i === "number" && i["<"](0)) ? shape.length["+"](i) : i][0]["+"](s[0]);
            "121";
            shape[(typeof i === "number" && i["<"](0)) ? shape.length["+"](i) : i][1] = shape[(typeof i === "number" && i["<"](0)) ? shape.length["+"](i) : i][1]["+"](s[1]);
        }
        "122";
        return shape;
    };
    if (!move_shape.__argnames__) Object.defineProperties(move_shape, {
        __argnames__ : {value: ["shape", "s"]},
        __module__ : {value: null}
    });

    "124";
    async function merge_shape(shape1, shape2) {
        var ρσ_ls, output, sh;
        "125";
        output = ρσ_list_decorate([]);
        "126";
        var ρσ_Iter2 = shape1;
        ρσ_Iter2 = ((typeof ρσ_Iter2[Symbol.iterator] === "function") ? (ρσ_Iter2 instanceof Map ? ρσ_Iter2.keys() : ρσ_Iter2) : Object.keys(ρσ_Iter2));
        for (var ρσ_Index2 of ρσ_Iter2) {
            sh = ρσ_Index2;
            "127";
            output.append(sh);
        }
        "128";
        var ρσ_Iter3 = shape2;
        ρσ_Iter3 = ((typeof ρσ_Iter3[Symbol.iterator] === "function") ? (ρσ_Iter3 instanceof Map ? ρσ_Iter3.keys() : ρσ_Iter3) : Object.keys(ρσ_Iter3));
        for (var ρσ_Index3 of ρσ_Iter3) {
            sh = ρσ_Index3;
            "129";
            output.append(sh);
        }
        "130";
        return output;
    };
    if (!merge_shape.__argnames__) Object.defineProperties(merge_shape, {
        __argnames__ : {value: ["shape1", "shape2"]},
        __module__ : {value: null}
    });

    "132";
    function Surface() {;
    }
    Surface.prototype.__init__ = async function __init__(mass, radius, left_len, up_len) {
        var self = this;
        "134";
        self.mass = mass;
        "135";
        self.pos = vec(0, 0, 0);
        "136";
        self.vel = vec(0, 0, 0);
        "137";
        self.acc = vec(0, 0, 0);
        "138";
        self.radius = radius;
        "139";
        self.center = vec(0, radius, 0);
        "140";
        self.left_len = left_len;
        "141";
        self.up_len = up_len;
    };
    if (!Surface.prototype.__init__.__argnames__) Object.defineProperties(Surface.prototype.__init__, {
        __argnames__ : {value: ["mass", "radius", "left_len", "up_len"]},
        __module__ : {value: null}
    });
    Surface.__argnames__ = Surface.prototype.__init__.__argnames__;
    Surface.__handles_kwarg_interpolation__ = Surface.prototype.__init__.__handles_kwarg_interpolation__;
    Surface.prototype.make_obj = async function make_obj() {
        var self = this;
        var ρσ_ls, left_line, surf_arc, up_line, thickness, fill_line, surf_shape;
        "144";
        left_line = ρσ_list_decorate([ ρσ_list_decorate([ 1["-u"]()["*"](self.left_len), 0 ]), ρσ_list_decorate([ 0, 0 ]) ]);
        "145";
        surf_arc = (await arc_shape(self.radius, 1["-u"]()["*"](pi)["/"](2), 0));
        "147";
        surf_arc = (await move_shape(surf_arc, ρσ_list_decorate([ 0, self.radius ])));
        "149";
        up_line = ρσ_list_decorate([ ρσ_list_decorate([ self.radius, self.radius ]), ρσ_list_decorate([ self.radius, self.radius["+"](self.up_len) ]) ]);
        "151";
        thickness = self.radius["*"](.1);
        "152";
        fill_line = ρσ_list_decorate([ ρσ_list_decorate([ self.radius["+"](thickness), self.radius["+"](self.up_len) ]), ρσ_list_decorate([ self.radius["+"](thickness), 1["-u"]()["*"](thickness) ]), ρσ_list_decorate([ 1["-u"]()["*"](self.left_len), 1["-u"]()["*"](thickness) ]), ρσ_list_decorate([ 1["-u"]()["*"](self.left_len), 0 ]) ]);
        "153";
        surf_shape = (await merge_shape(left_line, surf_arc));
        "154";
        surf_shape = (await merge_shape(surf_shape, up_line));
        "155";
        surf_shape = (await merge_shape(surf_shape, fill_line));
        "160";
        self.obj = ρσ_interpolate_kwargs.call(this, extrusion, [ρσ_desugar_kwargs({shape: surf_shape, path: ρσ_list_decorate([ vec(0, 0, thickness), vec(0, 0, 1["-u"]()["*"](thickness)) ]), show_start_face: true})]);
        "161";
        self.offset = self.obj.pos;
    };
    if (!Surface.prototype.make_obj.__module__) Object.defineProperties(Surface.prototype.make_obj, {
        __module__ : {value: null}
    });
    Surface.prototype.reset_acc = async function reset_acc() {
        var self = this;
        "165";
        self.acc = vec(0, 0, 0);
    };
    if (!Surface.prototype.reset_acc.__module__) Object.defineProperties(Surface.prototype.reset_acc, {
        __module__ : {value: null}
    });
    Surface.prototype.apply_normal_force_from_ball = async function apply_normal_force_from_ball(normal_force) {
        var self = this;
        "169";
        self.acc = self.acc["+"](dot(vec(1, 0, 0), normal_force)["/"](self.mass)["*"](vec(1, 0, 0)));
        "170";
        return mag(self.acc);
    };
    if (!Surface.prototype.apply_normal_force_from_ball.__argnames__) Object.defineProperties(Surface.prototype.apply_normal_force_from_ball, {
        __argnames__ : {value: ["normal_force"]},
        __module__ : {value: null}
    });
    Surface.prototype.update_vel = async function update_vel() {
        var self = this;
        "173";
        self.vel = self.vel["+"](self.acc["*"](dt));
    };
    if (!Surface.prototype.update_vel.__module__) Object.defineProperties(Surface.prototype.update_vel, {
        __module__ : {value: null}
    });
    Surface.prototype.update_pos = async function update_pos() {
        var self = this;
        "176";
        self.pos = self.pos["+"](self.vel["*"](dt));
        "177";
        self.center = self.pos["+"](vec(0, self.radius, 0));
    };
    if (!Surface.prototype.update_pos.__module__) Object.defineProperties(Surface.prototype.update_pos, {
        __module__ : {value: null}
    });
    Surface.prototype.update_obj = async function update_obj() {
        var self = this;
        "180";
        self.obj.pos = self.pos["+"](self.offset);
    };
    if (!Surface.prototype.update_obj.__module__) Object.defineProperties(Surface.prototype.update_obj, {
        __module__ : {value: null}
    });
    Surface.prototype.__repr__ = async function __repr__() {
                return "<"["+"](__name__)["+"](".")["+"](this.constructor.name)["+"](" #")["+"](this.ρσ_object_id)["+"](">");
    };
    Surface.prototype.__str__ = async function __str__() {
        return this.__repr__();
    };
    Object.defineProperty(Surface.prototype, "__bases__", {value: []});
    
    
    
    
    
    
    

    "183";
    async function doNothing() {
        "184";
        return;
    };
    if (!doNothing.__module__) Object.defineProperties(doNothing, {
        __module__ : {value: null}
    });

    (await sleep(.1));
    "186";
    surface_r_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "surface_r : ", text: "10", type: "numeric"})]);
    "187";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "188";
    surface_m_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "surface_m : ", text: "20", type: "numeric"})]);
    "189";
    scene.append_to_caption("\n");
    (await sleep(.1));
    "191";
    left_len_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "left_len : ", text: "8", type: "numeric"})]);
    "192";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "193";
    up_len_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "up_len : ", text: "5", type: "numeric"})]);
    "194";
    scene.append_to_caption("\n");
    (await sleep(.1));
    "196";
    ball_r_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "ball_r : ", text: "1", type: "numeric"})]);
    "197";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "198";
    ball_m_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "ball_m : ", text: "10", type: "numeric"})]);
    "199";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "200";
    ball_v0_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "ball_v0 : ", text: "10", type: "numeric"})]);
    "201";
    scene.append_to_caption("\n");
    "203";
    conditions_set = false;
    "205";
    async function none_to_default(x) {
        "206";
        if (x.number === null) {
            "207";
            return float(x.text);
            "208";
        } else {
            "209";
            return x.number;
        }
    };
    if (!none_to_default.__argnames__) Object.defineProperties(none_to_default, {
        __argnames__ : {value: ["x"]},
        __module__ : {value: null}
    });

    "211";
    async function setConditions(evt) {
        "212";
        "213";
        "214";
        "215";
        "216";
        "217";
        "218";
        "219";
        surface_r = (await none_to_default(surface_r_input));
        "220";
        surface_m = (await none_to_default(surface_m_input));
        "221";
        ball_r = (await none_to_default(ball_r_input));
        "222";
        ball_m = (await none_to_default(ball_m_input));
        "223";
        ball_v0 = (await none_to_default(ball_v0_input));
        "224";
        left_len = (await none_to_default(left_len_input));
        "225";
        up_len = (await none_to_default(up_len_input));
        "226";
        "227";
        conditions_set = true;
    };
    if (!setConditions.__argnames__) Object.defineProperties(setConditions, {
        __argnames__ : {value: ["evt"]},
        __module__ : {value: null}
    });

    "229";
    confirm_btn = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: setConditions, text: "confirm"})]);
    "231";
    while (true) {
        "232";
        (await rate(10));
        "233";
        if (conditions_set) {
            "234";
            scene.caption = "";
            "235";
            break;
        }
    }
    "237";
    _GS_1 = new Surface;
    (await _GS_1.__init__(surface_m, surface_r, left_len, up_len));
    surface_01 = _GS_1;
    "238";
    _GS_1 = new Ball;
    (await _GS_1.__init__(vec(1["-u"]()["*"](left_len)["+"](ball_r), ball_r, 0), vec(ball_v0, 0, 0), ball_m, ball_r));
    ball_01 = _GS_1;
    "239";
    (await surface_01.make_obj());
    "240";
    (await ball_01.make_obj());
    "242";
    time = 0;
    "243";
    scene.title = "<b>t = "["+"]("{:.3f}".format(time))["+"](" sec<\/b>");
    "244";
    count = 1;
    "245";
    time_scale = 1["/"](dt);
    "247";
    acc_graph = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({title: "acceleration of surface in x axis", xtitle: "time", ytitle: "value", width: 900})]);
    "248";
    acc_func = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({color: color.blue, width: 4, label: "acceleration"})]);
    "250";
    x_momentum_graph = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({title: "momentum in x axis", xtitle: "time", ytitle: "value", width: 900})]);
    "251";
    x_momentum_ball_func = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({color: color.red, width: 4, label: "x_momentum_ball"})]);
    "252";
    x_momentum_surface_func = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({color: color.blue, width: 4, label: "x_momentum_surface"})]);
    "253";
    x_momentum_total_func = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({color: color.green, width: 4, label: "x_momentum_total"})]);
    "255";
    ρσ_interpolate_kwargs.call(this, print_options, [ρσ_desugar_kwargs({width: 380, height: 205, digits: 10})]);
    "256";
    print("dt:", dt);
    "257";
    print("surface_r:", surface_r, "\tsurface_m:", surface_m);
    "258";
    print("ball_r:", ball_r, "\tball_m:", ball_m);
    "259";
    print("left_len:", left_len, "\tup_len:", up_len);
    "261";
    while (true) {
        "262";
        (await rate(200));
        "264";
        time = count["*"](dt);
        "265";
        scene.title = "<b>t = "["+"]("{:.3f}".format(time))["+"](" sec</b>");
        "267";
        (await ball_01.reset_acc());
        "268";
        (await ball_01.apply_gravity());
        "269";
        (await surface_01.reset_acc());
        "270";
        acc_value = (await ball_01.apply_normal_force_from_surface(surface_01));
        "271";
        acc_func.plot(time, acc_value);
        "273";
        (await ball_01.update_vel());
        "274";
        (await surface_01.update_vel());
        "276";
        ball_01_x_momentum = ball_01.mass["*"](ball_01.vel.x);
        "277";
        surface_01_x_momentum = surface_01.mass["*"](surface_01.vel.x);
        "278";
        x_momentum_ball_func.plot(time, ball_01_x_momentum);
        "279";
        x_momentum_surface_func.plot(time, surface_01_x_momentum);
        "280";
        x_momentum_total_func.plot(time, ball_01_x_momentum["+"](surface_01_x_momentum));
        "282";
        (await ball_01.update_pos());
        "283";
        (await surface_01.update_pos());
        "284";
        (await ball_01.update_obj());
        "285";
        (await surface_01.update_obj());
        "287";
        count=count["+"](1);
    }
};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT