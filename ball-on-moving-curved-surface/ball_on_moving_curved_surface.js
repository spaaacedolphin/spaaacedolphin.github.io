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

    var version, print, arange, __name__, type, ρσ_ls, x_axis, y_axis, z_axis, g, dt, surface_r_input, surface_m_input, left_len_input, up_len_input, ball_r_input, ball_m_input, ball_v0_input, conditions_set, confirm_btn, _GS_1, surface_01, ball_01, time, count, time_scale, value_graph, acc_func, acc_value;
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
    x_axis = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), axis: vec(1, 0, 0), color: color.red})]);
    "4";
    y_axis = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), axis: vec(0, 1, 0), color: color.green})]);
    "5";
    z_axis = ρσ_interpolate_kwargs.call(this, arrow, [ρσ_desugar_kwargs({pos: vec(0, 0, 0), axis: vec(0, 0, 1), color: color.blue})]);
    "7";
    g = 9.8;
    "8";
    dt = .001;
    "10";
    function Ball() {;
    }
    Ball.prototype.__init__ = async function __init__(pos, vel, mass, radius) {
        var self = this;
        "12";
        self.pos = pos;
        "13";
        self.vel = vel;
        "14";
        self.acc = vec(0, 0, 0);
        "15";
        self.mass = mass;
        "16";
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
        "19";
        self.obj = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: self.pos, radius: self.radius, color: color.yellow, make_trail: true, trail_radius: self.radius["*"](.1)})]);
    };
    if (!Ball.prototype.make_obj.__module__) Object.defineProperties(Ball.prototype.make_obj, {
        __module__ : {value: null}
    });
    Ball.prototype.reset_acc = async function reset_acc() {
        var self = this;
        "22";
        self.acc = vec(0, 0, 0);
    };
    if (!Ball.prototype.reset_acc.__module__) Object.defineProperties(Ball.prototype.reset_acc, {
        __module__ : {value: null}
    });
    Ball.prototype.apply_gravity = async function apply_gravity() {
        var self = this;
        "25";
        self.acc = self.acc["+"](vec(0, 1["-u"]()["*"](g), 0));
    };
    if (!Ball.prototype.apply_gravity.__module__) Object.defineProperties(Ball.prototype.apply_gravity, {
        __module__ : {value: null}
    });
    Ball.prototype.apply_normal_force_from_surface = async function apply_normal_force_from_surface(surface) {
        var self = this;
        var ρσ_ls, r_from_center, unit_out_normal_vec, out_normal_vel, out_normal_acc;
        "29";
        r_from_center = self.pos["-"](1["*"](surface.center));
        "31";
        if (mag(r_from_center)[">="](surface.radius["-"](1["*"](self.radius))) && self.pos.x[">"](surface.pos.x) && self.pos.y["<"](surface.radius)) {
            "33";
            unit_out_normal_vec = hat(r_from_center);
            "34";
            self.pos = surface.center["+"](surface.radius["-"](1["*"](self.radius))["*"](unit_out_normal_vec));
            "36";
            out_normal_vel = dot(self.vel, unit_out_normal_vec);
            "37";
            if (out_normal_vel[">"](0)) {
                "38";
                self.vel = self.vel["-"](1["*"](out_normal_vel)["*"](unit_out_normal_vec));
            }
            "40";
            out_normal_acc = dot(self.acc, unit_out_normal_vec);
            "41";
            if (out_normal_acc[">"](0)) {
                "42";
                self.acc = self.acc["-"](1["*"](out_normal_acc)["*"](unit_out_normal_vec));
            }
            "44";
            return (await surface.apply_normal_force_from_ball(self.mass["*"](out_normal_acc)["*"](unit_out_normal_vec)));
            "46";
        }
        if (self.pos.x[">"](surface.pos.x["-"](1["*"](surface.left_len))) && self.pos.x["<="](surface.pos.x)) {
            "47";
            if (self.pos.y["<"](self.radius)) {
                "48";
                self.pos.y = self.radius;
                "49";
                if (self.vel.y["<"](0)) {
                    "50";
                    self.vel.y = 0;
                    "51";
                }
                if (self.acc.y["<"](0)) {
                    "52";
                    self.acc.y = 0;
                    "54";
                }
            }
        }
        if (self.pos.y[">="](self.radius) && self.pos.y["<"](surface.radius["+"](surface.up_len))) {
            "55";
            if (self.pos.x[">"](surface.pos.x["+"](surface.radius)["-"](1["*"](self.radius)))) {
                "56";
                self.pos.x = surface.pos.x["+"](surface.radius)["-"](1["*"](self.radius));
                "57";
                if (self.vel.x[">"](0)) {
                    "58";
                    self.vel.x = 0;
                    "59";
                }
                if (self.acc.x[">"](0)) {
                    "60";
                    (await surface.apply_normal_force_from_ball(self.mass["*"](self.acc)));
                    "61";
                    self.acc.x = 0;
                }
            }
        }
        "62";
        return 0;
    };
    if (!Ball.prototype.apply_normal_force_from_surface.__argnames__) Object.defineProperties(Ball.prototype.apply_normal_force_from_surface, {
        __argnames__ : {value: ["surface"]},
        __module__ : {value: null}
    });
    Ball.prototype.update_vel = async function update_vel() {
        var self = this;
        "65";
        self.vel = self.vel["+"](self.acc["*"](dt));
    };
    if (!Ball.prototype.update_vel.__module__) Object.defineProperties(Ball.prototype.update_vel, {
        __module__ : {value: null}
    });
    Ball.prototype.update_pos = async function update_pos() {
        var self = this;
        "68";
        self.pos = self.pos["+"](self.vel["*"](dt));
    };
    if (!Ball.prototype.update_pos.__module__) Object.defineProperties(Ball.prototype.update_pos, {
        __module__ : {value: null}
    });
    Ball.prototype.update_obj = async function update_obj() {
        var self = this;
        "71";
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









    "73";
    async function arc_shape(r, start, end) {
        var ρσ_ls, output, theta;
        "74";
        output = ρσ_list_decorate([]);
        "75";
        theta = start;
        "76";
        while (theta["<="](end)) {
            "77";
            output.append(ρσ_list_decorate([ r["*"](cos(theta)), r["*"](sin(theta)) ]));
            "78";
            theta=theta["+"](.01);
        }
        "79";
        return output;
    };
    if (!arc_shape.__argnames__) Object.defineProperties(arc_shape, {
        __argnames__ : {value: ["r", "start", "end"]},
        __module__ : {value: null}
    });

    "81";
    async function move_shape(shape, s) {
        var ρσ_ls, i;
        "82";
        var ρσ_Iter1 = range(len(shape));
        ρσ_Iter1 = ((typeof ρσ_Iter1[Symbol.iterator] === "function") ? (ρσ_Iter1 instanceof Map ? ρσ_Iter1.keys() : ρσ_Iter1) : Object.keys(ρσ_Iter1));
        for (var ρσ_Index1 of ρσ_Iter1) {
            i = ρσ_Index1;
            "83";
            shape[(typeof i === "number" && i["<"](0)) ? shape.length["+"](i) : i][0] = shape[(typeof i === "number" && i["<"](0)) ? shape.length["+"](i) : i][0]["+"](s[0]);
            "84";
            shape[(typeof i === "number" && i["<"](0)) ? shape.length["+"](i) : i][1] = shape[(typeof i === "number" && i["<"](0)) ? shape.length["+"](i) : i][1]["+"](s[1]);
        }
        "85";
        return shape;
    };
    if (!move_shape.__argnames__) Object.defineProperties(move_shape, {
        __argnames__ : {value: ["shape", "s"]},
        __module__ : {value: null}
    });

    "87";
    async function merge_shape(shape1, shape2) {
        var ρσ_ls, output, sh;
        "88";
        output = ρσ_list_decorate([]);
        "89";
        var ρσ_Iter2 = shape1;
        ρσ_Iter2 = ((typeof ρσ_Iter2[Symbol.iterator] === "function") ? (ρσ_Iter2 instanceof Map ? ρσ_Iter2.keys() : ρσ_Iter2) : Object.keys(ρσ_Iter2));
        for (var ρσ_Index2 of ρσ_Iter2) {
            sh = ρσ_Index2;
            "90";
            output.append(sh);
        }
        "91";
        var ρσ_Iter3 = shape2;
        ρσ_Iter3 = ((typeof ρσ_Iter3[Symbol.iterator] === "function") ? (ρσ_Iter3 instanceof Map ? ρσ_Iter3.keys() : ρσ_Iter3) : Object.keys(ρσ_Iter3));
        for (var ρσ_Index3 of ρσ_Iter3) {
            sh = ρσ_Index3;
            "92";
            output.append(sh);
        }
        "93";
        return output;
    };
    if (!merge_shape.__argnames__) Object.defineProperties(merge_shape, {
        __argnames__ : {value: ["shape1", "shape2"]},
        __module__ : {value: null}
    });

    "95";
    function Surface() {;
    }
    Surface.prototype.__init__ = async function __init__(mass, radius, left_len, up_len) {
        var self = this;
        "97";
        self.mass = mass;
        "98";
        self.pos = vec(0, 0, 0);
        "99";
        self.vel = vec(0, 0, 0);
        "100";
        self.acc = vec(0, 0, 0);
        "101";
        self.radius = radius;
        "102";
        self.center = vec(0, radius, 0);
        "103";
        self.left_len = left_len;
        "104";
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
        var ρσ_ls, left_line, surf_arc, up_line, fill_line, surf_shape;
        "107";
        left_line = ρσ_list_decorate([ ρσ_list_decorate([ 1["-u"]()["*"](self.left_len), 0 ]), ρσ_list_decorate([ 0, 0 ]) ]);
        "108";
        surf_arc = (await arc_shape(self.radius, 1["-u"]()["*"](pi)["/"](2), 0));
        "110";
        surf_arc = (await move_shape(surf_arc, ρσ_list_decorate([ 0, self.radius ])));
        "112";
        up_line = ρσ_list_decorate([ ρσ_list_decorate([ self.radius, self.radius ]), ρσ_list_decorate([ self.radius, self.radius["+"](self.up_len) ]) ]);
        "114";
        fill_line = ρσ_list_decorate([ ρσ_list_decorate([ self.radius["+"](1), self.radius["+"](self.up_len) ]), ρσ_list_decorate([ self.radius["+"](1), 1["-u"]()["*"](1) ]), ρσ_list_decorate([ 1["-u"]()["*"](self.left_len), 1["-u"]()["*"](1) ]), ρσ_list_decorate([ 1["-u"]()["*"](self.left_len), 0 ]) ]);
        "115";
        surf_shape = (await merge_shape(left_line, surf_arc));
        "116";
        surf_shape = (await merge_shape(surf_shape, up_line));
        "117";
        surf_shape = (await merge_shape(surf_shape, fill_line));
        "121";
        self.surf_shape = surf_shape;
        "122";
        self.obj = ρσ_interpolate_kwargs.call(this, extrusion, [ρσ_desugar_kwargs({shape: surf_shape, path: ρσ_list_decorate([ vec(0, 0, 1), vec(0, 0, 1["-u"]()["*"](1)) ]), pos: vec(1.5, 7, 0)})]);
    };
    if (!Surface.prototype.make_obj.__module__) Object.defineProperties(Surface.prototype.make_obj, {
        __module__ : {value: null}
    });
    Surface.prototype.reset_acc = async function reset_acc() {
        var self = this;
        "126";
        self.acc = vec(0, 0, 0);
    };
    if (!Surface.prototype.reset_acc.__module__) Object.defineProperties(Surface.prototype.reset_acc, {
        __module__ : {value: null}
    });
    Surface.prototype.apply_normal_force_from_ball = async function apply_normal_force_from_ball(normal_force) {
        var self = this;
        "129";
        self.acc = self.acc["+"](dot(vec(1, 0, 0), normal_force)["/"](self.mass)["*"](vec(1, 0, 0)));
        "130";
        return mag(self.acc);
    };
    if (!Surface.prototype.apply_normal_force_from_ball.__argnames__) Object.defineProperties(Surface.prototype.apply_normal_force_from_ball, {
        __argnames__ : {value: ["normal_force"]},
        __module__ : {value: null}
    });
    Surface.prototype.update_vel = async function update_vel() {
        var self = this;
        "133";
        self.vel = self.vel["+"](self.acc["*"](dt));
    };
    if (!Surface.prototype.update_vel.__module__) Object.defineProperties(Surface.prototype.update_vel, {
        __module__ : {value: null}
    });
    Surface.prototype.update_pos = async function update_pos() {
        var self = this;
        "136";
        self.pos = self.pos["+"](self.vel["*"](dt));
        "137";
        self.center = self.pos["+"](vec(0, self.radius, 0));
    };
    if (!Surface.prototype.update_pos.__module__) Object.defineProperties(Surface.prototype.update_pos, {
        __module__ : {value: null}
    });
    Surface.prototype.update_obj = async function update_obj() {
        var self = this;
        "140";
        self.obj.pos = self.pos["+"](vec(1.5, 7, 0));
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








    "143";
    async function doNothing() {
        "144";
        return;
    };
    if (!doNothing.__module__) Object.defineProperties(doNothing, {
        __module__ : {value: null}
    });

    (await sleep(.1));
    "146";
    surface_r_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "surface_r : ", text: "10", type: "numeric"})]);
    "147";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "148";
    surface_m_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "surface_m : ", text: "20", type: "numeric"})]);
    "149";
    scene.append_to_caption("\n");
    (await sleep(.1));
    "151";
    left_len_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "left_len : ", text: "8", type: "numeric"})]);
    "152";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "153";
    up_len_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "up_len : ", text: "5", type: "numeric"})]);
    "154";
    scene.append_to_caption("\n");
    (await sleep(.1));
    "156";
    ball_r_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "ball_r : ", text: "1", type: "numeric"})]);
    "157";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "158";
    ball_m_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "ball_m : ", text: "10", type: "numeric"})]);
    "159";
    scene.append_to_caption("\t");
    (await sleep(.1));
    "160";
    ball_v0_input = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({bind: doNothing, prompt: "ball_v0 : ", text: "10", type: "numeric"})]);
    "161";
    scene.append_to_caption("\n");
    "163";
    conditions_set = false;
    "165";
    async function none_to_default(x) {
        "166";
        if (x.number === null) {
            "167";
            return float(x.text);
            "168";
        } else {
            "169";
            return x.number;
        }
    };
    if (!none_to_default.__argnames__) Object.defineProperties(none_to_default, {
        __argnames__ : {value: ["x"]},
        __module__ : {value: null}
    });

    "171";
    async function setConditions(evt) {
        "172";
        "173";
        "174";
        "175";
        "176";
        "177";
        "178";
        "179";
        surface_r = (await none_to_default(surface_r_input));
        "180";
        surface_m = (await none_to_default(surface_m_input));
        "181";
        ball_r = (await none_to_default(ball_r_input));
        "182";
        ball_m = (await none_to_default(ball_m_input));
        "183";
        ball_v0 = (await none_to_default(ball_v0_input));
        "184";
        left_len = (await none_to_default(left_len_input));
        "185";
        up_len = (await none_to_default(up_len_input));
        "186";
        "187";
        conditions_set = true;
    };
    if (!setConditions.__argnames__) Object.defineProperties(setConditions, {
        __argnames__ : {value: ["evt"]},
        __module__ : {value: null}
    });

    "189";
    confirm_btn = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: setConditions, text: "confirm"})]);
    "191";
    while (true) {
        "192";
        (await rate(10));
        "193";
        if (conditions_set) {
            "194";
            scene.caption = "";
            "195";
            break;
        }
    }
    "197";
    _GS_1 = new Surface;
    (await _GS_1.__init__(surface_m, surface_r, left_len, up_len));
    surface_01 = _GS_1;
    "198";
    _GS_1 = new Ball;
    (await _GS_1.__init__(vec(1["-u"]()["*"](left_len)["+"](ball_r), ball_r, 0), vec(ball_v0, 0, 0), ball_m, ball_r));
    ball_01 = _GS_1;
    "199";
    (await surface_01.make_obj());
    "200";
    (await ball_01.make_obj());
    "202";
    time = 0;
    "203";
    scene.title = "<b>t = "["+"]("{:.3f}".format(time))["+"](" sec<\/b>");
    "204";
    count = 1;
    "205";
    time_scale = 1["/"](dt);
    "207";
    value_graph = ρσ_interpolate_kwargs.call(this, graph, [ρσ_desugar_kwargs({title: "", xtitle: "time", ytitle: "value"})]);
    "208";
    acc_func = ρσ_interpolate_kwargs.call(this, gcurve, [ρσ_desugar_kwargs({color: color.blue, width: 4, label: "acceleration"})]);
    "210";
    ρσ_interpolate_kwargs.call(this, print_options, [ρσ_desugar_kwargs({width: 380, height: 205, digits: 10})]);
    "211";
    print("dt:", dt);
    "212";
    print("surface_r:", surface_r, "\tsurface_m:", surface_m);
    "213";
    print("ball_r:", ball_r, "\tball_m:", ball_m);
    "214";
    print("left_len:", left_len, "\tup_len:", up_len);
    "216";
    while (true) {
        "217";
        (await rate(200));
        "219";
        time = count["*"](dt);
        "220";
        scene.title = "<b>t = "["+"]("{:.3f}".format(time))["+"](" sec</b>");
        "222";
        (await ball_01.reset_acc());
        "223";
        (await ball_01.apply_gravity());
        "224";
        (await surface_01.reset_acc());
        "225";
        acc_value = (await ball_01.apply_normal_force_from_surface(surface_01));
        "226";
        acc_func.plot(time, acc_value);
        "228";
        (await ball_01.update_vel());
        "229";
        (await surface_01.update_vel());
        "230";
        (await ball_01.update_pos());
        "231";
        (await surface_01.update_pos());
        "232";
        (await ball_01.update_obj());
        "233";
        (await surface_01.update_obj());
        "235";
        count=count["+"](1);
    }
};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT
