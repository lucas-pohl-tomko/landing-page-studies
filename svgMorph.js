// polygon morph
var morphTween21 = KUTE.fromTo(
	"#triangle",
	{ attr: { fill: "#673AB7" }, path: "#triangle" },
	{ attr: { fill: "#2196F3" }, path: "#square" },
	{
		duration: 1500,
		easing: "easingCubicOut",
	}
);
var morphTween22 = KUTE.fromTo(
	"#triangle",
	{ path: "#square", attr: { fill: "#2196F3" } },
	{ path: "#star2", attr: { fill: "deeppink" } },
	{
		delay: 500,
		duration: 1500,
		easing: "easingCubicOut",
	}
);
var morphTween23 = KUTE.fromTo(
	"#triangle",
	{ path: "#star2", attr: { fill: "deeppink" } },
	{ path: "#triangle", attr: { fill: "#673AB7" } },
	{
		delay: 500,
		duration: 1500,
		easing: "easingCubicOut",
	}
);
var morphTween24 = KUTE.fromTo(
	"#triangle",
	{ path: "#triangle", attr: { fill: "#673AB7" } },
	{ path: "#cat", attr: { fill: "darkorange" } },
	{
		delay: 500,
		duration: 1500,
		easing: "easingCubicOut",
	}
);
var morphTween25 = KUTE.fromTo(
	"#triangle",
	{ path: "#cat", attr: { fill: "darkorange" } },
	{ path: "#triangle", attr: { fill: "#673AB7" } },
	{
		delay: 500,
		duration: 1500,
		easing: "easingCubicOut",
	}
);

try {
	morphTween21.chain(morphTween22);
	morphTween22.chain(morphTween23);
	morphTween23.chain(morphTween24);
	morphTween24.chain(morphTween25);
	morphTween25.chain(morphTween21);
} catch (e) {
	console.error(e + "TweenBase doesn't support chain method");
}

if (
	!morphTween21.playing &&
	!morphTween22.playing &&
	!morphTween23.playing &&
	!morphTween24.playing &&
	!morphTween25.playing
) {
	morphTween21.start();
	morphTween21._dl = 500;
	morphBtn2.innerHTML = "Stop";
	morphBtn2.className = "btn btn-pink";
} else {
	morphTween21.playing && morphTween21.stop();
	morphTween21._dl = 0;
	morphTween22.playing && morphTween22.stop();
	morphTween23.playing && morphTween23.stop();
	morphTween24.playing && morphTween24.stop();
	morphTween25.playing && morphTween25.stop();
	morphBtn2.innerHTML = "Start";
	morphBtn2.className = "btn btn-green";
}
