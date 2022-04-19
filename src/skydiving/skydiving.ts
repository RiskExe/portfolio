import '../global.css';
import './style.css';
import $ from "jquery";


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
	progress: number 
	jumps: Ijump[]
}

// logic for a subtle effect that runs 
async function increment_jumps(): Promise<void> {
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

async function init_progressbar(): Promise<void> {
	let i = 1;
	$(".progress .progressnode").toArray().forEach(el => {
		const x: JQuery<HTMLElement> = $(el);
		x.attr('id', `node_${i}`);
		i++;
	});
	i = 1;
	$(".progress .string").toArray().forEach(el => {
		const x: JQuery<HTMLElement> = $(el);
		x.attr('id', `string_${i}`);
		i++;
	});
}

async function sequence_through_progress(): Promise<void> {
	
}

setTimeout(function() {
	console.log(api_res);
	increment_jumps();
	init_progressbar();
	sequence_through_progress();
}, 200);


const api_res: Iapi = {
	name: "John Murray",
	jump_count: 8,
	progress: 3,
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
// alert("Hello Skydivers");