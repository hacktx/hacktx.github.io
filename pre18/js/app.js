(function() {
	var size = 12,
		canvas = document.getElementById("pattern"),
		ctx = canvas.getContext("2d");

	canvas.width = 1200; // $herowidth
	canvas.height = canvas.width;

	function render() {
		canvas.width = canvas.width;

		for (var i = 0; i < floaties.length; i++) {
			var floaty = floaties[i];
			var numberOfSides = 5,
				step  = 2 * Math.PI / 5,
				shift = floaty.theta;
			ctx.beginPath();
			for (var j = 0; j <= 5;j++) {
				var curStep = j * step + shift;
				ctx.lineTo(floaty.x + size * Math.cos(curStep), floaty.y + size * Math.sin(curStep));
			}
			ctx.strokeStyle = "white";
			ctx.lineWidth = 3;
			ctx.stroke();

			floaty.y--;
			floaty.theta += Math.PI / 180;
			if (floaty.y < -size || floaty.x < -size) {
				floaties[i] = randomFloaty();
			}
		}

		requestAnimationFrame(render);
	}

	var floaties = [];
	for (var i = 0; i < 20; i++) {
		floaties.push({
			x: (Math.random()*canvas.width)|0,
			y: (Math.random()*canvas.height)|0,
			theta: Math.random()*Math.PI*0.2+0,
		});
	}
	render();

	function randomFloaty() {
		return {
			x: (Math.random()*canvas.width)|0,
			y: canvas.height+size,
			theta: Math.random()*Math.PI*0.2+0,
		};
	}

	function drawAt(x, y, theta) {
		ctx.translate(x, y);
		ctx.rotate(theta);
		ctx.drawImage(prerender, x-size, y-size);
		ctx.rotate(-theta);
		ctx.translate(-x, -y);
	}
})();
