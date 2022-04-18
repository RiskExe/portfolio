import '../global.css';
import './style.css';
import $ from "jquery";
import { syncBuiltinESMExports } from 'module';

interface Ijump {
	no: number
	desc: string
	altitude: number
	aircraft: string
	airfield: string
	pass: boolean

}
interface Iapi {
	jump_count: number
	name: string,
	jumps: Ijump[]
}

async function increment_jumps() {
	const duration: number = 1000 / 8;
	let pause = Math.round(duration / api_res.jump_count);
	let inc = Math.round(api_res.jump_count / 8);
	inc = 1;
	let x = 0;
	const int = setInterval(function() {
		if (x <= api_res.jump_count) {
			$("#jumpcount").text(x);
			x += inc;
		}
		else {
			clearInterval(int);
		}
	}, pause);
	await int;
}

$('button').on('click', function() {
	// increment_jumps();
});


let index = 1;
$('#plus').on('click', function() {
	if (true) {
		$(".progressnode").index(index)
		index++;
	}
});

$('#remove').on('click', function() {

});


const api_res: Iapi = {
	name: "John Murray",
	jump_count: 188,
	jumps: [
		{no: 1, desc: "", altitude: 3500, airfield: "Tilstock", aircraft: "G-VANX", pass: false},
		{no: 2, desc: "", altitude: 3500, airfield: "Tilstock", aircraft: "G-VANX", pass: false},
		{no: 3, desc: "successful", altitude: 3500, airfield: "Tilstock", aircraft: "G-VANX", pass: true},
		{no: 4, desc: "successful", altitude: 3500, airfield: "Tilstock", aircraft: "G-VANX", pass: true},
		{no: 5, desc: "DP1", altitude: 3500, airfield: "Tilstock", aircraft: "G-VANX", pass: true},
		{no: 6, desc: "DP2", altitude: 3500, airfield: "Tilstock", aircraft: "G-VANX", pass: true},
		{no: 7, desc: "DP3", altitude: 3500, airfield: "Tilstock", aircraft: "G-VANX", pass: true},
		{no: 8, desc: "Excellent First Freefall", altitude: 4500, airfield: "Tilstock", aircraft: "G-VANX", pass: true},
	]
}
console.log(api_res);

// alert("Hello Skydivers");