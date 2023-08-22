class Circle{
	position={x:0,y:0};
	size=null;
	speed=null;
	dir={x:1,y:1};
	ctx=null;
	color='blue';
	constructor(config){
		Object.assign(this,config);
		this.init();
	}
	init(){
		this.setSize();
		this.speedX = Math.random()-0.5;
		this.speedY = Math.random()-0.5;
		this.position = {
			x:this.canvas.width/2,
			y:this.canvas.height/2
		}
		this.sizegonevalue = this.size*0.01*-1;
	}
	update(){
		this.move();
		this.draw();
		this.goneprocess();
	}
	move(){
		this.position.x += this.speedX;
		this.position.y += this.speedY;
		this.bounding();
	}
	setSize(){this.size = Math.random()*10+20}
	bounding(){
		if(this.position.x+this.size/2 > this.canvas.width*0.75 || this.position.x-this.size/2<this.canvas.width*0.25)this.speedX *= -1;
		if(this.position.y+this.size/2 > this.canvas.height || this.position.y-this.size/2<0)this.speedY *= -1;
	}
	goneprocess(){
		if(this.size+this.sizegonevalue>0)this.size+=this.sizegonevalue;
		else this.size = 0;
		
		if(this.size < 12 || this.size>30){
			this.sizegonevalue*=-1;
		}
	}
	draw(){
		this.ctx.beginPath();
		//styling the circle.
		this.ctx.fillStyle = this.color;
		this.ctx.arc(this.position.x,this.position.y,this.size,0,Math.PI*2);
		this.ctx.fill();
	}
}

const infinityDreams = {
	pageSetup(){
		const main = makeElement('main',{
			style:`
				display:flex;
				flex-direction:column;
				
			`,
			innerHTML:`
				<div class='left' id=profileview>
					<div id=whitebox
					style="
						border-radius:20px;
						display:flex;
						justify-content:center;
						height:100%;
						width:100%;
						position:absolute;
					"
					>
						<div class=container style=background:none;border:none;margin:0;>
							<span>
								<img src=/file?fn=betterprofile.png
								style="
									width:200px;
									height:200px;
									object-fit:cover;
									border-radius:50%;
									box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px, rgba(0, 0, 0, 0.14) 0px 2px 2px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
								"
								>
							</span>
							<div>
								<span>CEO & CTO of InfinityDreams</span>
							</div>
							<div class=bigfont>
								<span>GEMA/MRMONGKEYY</span>
							</div>
							<div>
								<span
								style="background:none;"
								>"Cause Mydream Must Be Reality"</span>
							</div>
							<div>
								<span
								style="
									background:red;
									padding:20px;
									color:white;
									border:2px solid black;
									box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px, rgba(0, 0, 0, 0.14) 0px 2px 2px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
								"
								id=seemoreproject
								>
									Lihat Project Saya
								</span>
							</div>
						</div></div>
					</div>
				</div>
				<div class='right' id=projectview
				style="
					position:absolute;
					margin-top:200%;
				"
				>
					<div class='insideright desktopmenu bottomBorder'
					style="
						position:sticky;top:0;
						overflow:auto;
					"
					>
						<div id=titleMobile>
							<span>InfinityDreams</span>
						</div>
						<nav>
							<div>
								<span>About me</span>
							</div>
							<div>
								<span>Contact</span>
							</div>
							<div>
								<span>Articles</span>
							</div>
							<div>
								<span>Anouncement</span>
							</div>
							<div>
								<span><a href=https://saweria.co/mrmongkeyy style=color:brown>Donasi</a></span>
							</div>
						</nav>
					</div>
					<div class=insideleft>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none; for=hellodolphin>
							<div>
								<span>Javascript/PHP</span>
							</div>
							<span>
								<img src=/file?fn=hellodolphin.png>
							</span>
							<div>
								<span>Hellodolphin</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>Javascript/PHP</span>
							</div>
							<span>
								<img src=/file?fn=quizyzz.png>
							</span>
							<div>
								<span>Quizyzz</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>Javascript/NodeJs</span>
							</div>
							<span>
								<img src=/file?fn=mrx.png>
							</span>
							<div>
								<span>MrX</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>Javascript</span>
							</div>
							<span>
								<img src=/file?fn=gamastudio.png>
							</span>
							<div>
								<span>GAMASTUDIO</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>Godot GDScript</span>
							</div>
							<span>
								<img src=/file?fn=eagleswar.png>
							</span>
							<div>
								<span>EaglesWar</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>Javascript</span>
							</div>
							<span>
								<img src=/file?fn=library.png>
							</span>
							<div>
								<span>JS Game engine library</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>Javascript</span>
							</div>
							<span>
								<img src=/file?fn=theinfinityRoads.png>
							</span>
							<div>
								<span>INFINITYROADS</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>Javascript</span>
							</div>
							<span>
								<img src=./file?fn=faraway.png>
							</span>
							<div>
								<span>FARAWAY!</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>JS/NodeJs</span>
							</div>
							<span>
								<img src=./file?fn=nontonajaudah.png>
							</span>
							<div>
								<span>NontonAjaUdah</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>JS/NodeJs</span>
							</div>
							<span>
								<img src=./file?fn=ngomikajaudah.png>
							</span>
							<div>
								<span>NgomikAjaUdah</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>JS/NodeJs</span>
							</div>
							<span>
								<img src=./file?fn=metadope.png>
							</span>
							<div>
								<span>MetaDope</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>JS/NodeJs</span>
							</div>
							<span>
								<img src=./file?fn=masbro.png>
							</span>
							<div>
								<span>MasBroOnlineOrder</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>JS/NodeJs</span>
							</div>
							<span>
								<img src=./file?fn=akaraservices.png>
							</span>
							<div>
								<span>AKARA</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>JS/NodeJs</span>
							</div>
							<span>
								<img src=./file?fn=apicaboutshit.png>
							</span>
							<div>
								<span>GMarket</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>PHP / CI 3</span>
							</div>
							<span>
								<img src=./file?fn=cegongshop.png>
							</span>
							<div>
								<span>CegongShop</span>
							</div>
						</div>
						<div class=container style=background:white;height:auto;width:80%;border:none;background:none;>
							<div>
								<span>BananaConsole.js</span>
							</div>
							<span>
								<img src=./file?fn=tarikjendral.png>
							</span>
							<div>
								<span>Tarik Jendral</span>
							</div>
						</div>
					</div>
					<div
					style="
						background:none;
						font-size:small;
						font-weight:bold;
						display:flex;
						width:50%;
						margin:10px 0;
						justify-content:space-between;
					"
					>
						<div>
							<span>&copy 2023. MRMONGKEYY</span>
						</div>
						<div>
							<span
							style="
								text-decoration:underline;
								cursor:pointer;
							"
							id=backtopbutton
							>Back on top</span>
						</div>
					</div>
				</div>
			`,
			onadded(){
				find('#seemoreproject').onclick = ()=>{
					find('#projectview').scrollIntoView({behavior:'smooth'});
				}
				find('#backtopbutton').onclick = ()=>{
					find('#profileview').scrollIntoView({behavior:'smooth'});
				}
			}
		});
		document.body.appendChild(main);
		main.onadded();
	},
	init(){
		this.pageSetup();
		this.navEvent();
		this.contentHoverEvent();
	},
	navEvent(){
		const events = [
			infinityDreams.nav.aboutme,
			infinityDreams.nav.contact,
			infinityDreams.nav.articles,
			infinityDreams.nav.anouncement
		];
		findall('nav div').forEach((div,i)=>{
			div.index = i;
			div.onclick = function(){
				events[this.index]();
			}
		})
	},
	contentHoverEvent(){
		const contents = [
			{
				displayed:false,
				title:'HELLODOLPHIN',
				language:'JS/PHP',
				description:`
					Aplikasi Artikel. User bisa baca ataupun menulis artikelnya sendiri.
					Aplikasi ini dibangun menggunakan Javascript dan PHP.
				`
			},
			{
				displayed:false,
				title:'QUIZYZZ',
				language:'JS/PHP',
				description:`
					Aplikasi quis, seperti namanya. User bisa bikin quis dan menjawab kuis.
					Untuk bikin quis user hanya perlu mensetup quisnya lalu akan diberikan id dari quis itu.
					Sehingga user bisa membagikannya kepada orang lain untuk di isi.
				`
			},
			{
				displayed:false,
				title:'MRX',
				language:'JS/NodeJs',
				description:`
					JS app, dengan node js sebagai server. App diintegrasikan dengan ChatGPT API. User bisa berinteraksi dengan
					open ai tanpa harus login terlebih dahulu.
				`
			},
			{
				displayed:false,
				title:'GAMASTUDIO',
				language:'JAVASCRIPT',
				description:`
					Aplikasi javascript, yang fungsinya adalah memonitor banyak data lagu menggunakan key event(keyboard key).
					Sangat berguna bagi mereka yang bekerja dengan banyak data musik, seperti koordinator sound.
				`
			},
			{
				displayed:false,
				title:'EAGLESWAR',
				language:'GD SCRIPT',
				description:`
					Godot game. Battle royal planes.
				`
			},
			{
				displayed:false,
				title:'BananaConsole',
				language:'Javascript',
				description:`
					Library untuk membuat game dan juga menambah fitur js. Sedang dalam pengembangan.
				`
			},
			{
				displayed:false,
				title:'INFINITYROADS',
				language:'JAVASCRIPT',
				description:`
					JS game racing game, di bangun dengan library game saya sendiri. BananaConsole.
				`
			},
			{
				displayed:false,
				title:'FARAWAY',
				language:'JAVASCRIPT',
				description:`
					JS game shooting gun game, di bangun dengan library game saya sendiri. BananaConsole.
				`
			},
			{
				displayed:false,
				title:'NontonAjaUdah',
				language:'JS/NodeJs',
				description:`
					Web streaming movie, hasil belajar scrapping data.
				`
			},
			{
				displayed:false,
				title:'NgomikAjaUdah',
				language:'JS/NodeJs',
				description:`
					Web Reading Anime, hasil belajar scrapping data.
				`
			},
			{
				displayed:false,
				title:'MetaDope',
				language:'JS/NodeJs',
				description:`
					Web online suits game multiplayer, hasil belajar firebase.
				`
			},
			{
				displayed:false,
				title:'MasBro',
				language:'JS/NodeJs',
				description:`
					Aplikasi Online Order, yang bisa Compatible dengan semua bisnis bertipe online.
				`
			},
			{
				displayed:false,
				title:'Akara',
				language:'JS/NodeJs',
				description:`
					Aplikasi Online Order, yang diemplemenatasikan ke Usaha Servis elektronik.
				`
			}
		];
		const display = function(index,dir){
			//set the label.
			const content = contents[index];
			content.displayed = true;
			let bound = find('.insideleft').querySelector('#bound');
			if(!bound){
				//working on the bound.
				bound = makeElement('div',{
					id:'bound',
					style:`
						position:absolute;
						width:50%;
						max-height:70%;
						align-items:center;
						min-height:20%;
						${dir}:0;
						background:white;
						display:flex;
						justify-content:center;
						flex-direction:column;
						padding:20px;
						margin:10px;
						box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px, rgba(0, 0, 0, 0.14) 0px 2px 2px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
					`,
					innerHTML:`
						<div style=margin-bottom:10px;>${content.title} {${content.language}}</div>
						<div class=smallfont>${content.description}</div>
						<div style=margin-top:10px;>KLIK UNTUK MELIHAT LEBIH</div>
						<div style=margin-top:10px;>SHIFT + MouseRoll To Scrolling Content!</div>
					`
				});
				find('.insideleft').appendChild(bound);
			}else{
				bound.innerHTML = `

				`;
			}
		}
		const click = function(index){
			const hreflist = [
				'https://hellodolphin.000webhostapp.com',
				'https://hellodolphin.000webhostapp.com/quizyzz',
				'https://github.com/mrmongkeyy/mrx',
				'https://github.com/mrmongkeyy/gamastudio',
				'https://github.com/mrmongkeyy/eagleswar',
				'https://github.com/mrmongkeyy/bananaconsole',
				'https://mrmongkeyy.github.io/bananaconsole/infinityRoads',
				'https://mrmongkeyy.github.io/bananaconsole/faraway',
				'https://github.com/mrmongkeyy/bananamovies',
				'https://github.com/gemasajaa/bacaajaudah',
				'https://github.com/mrmongkeyy/dope',
				'https://github.com/mrmongkeyy/masbroapp',
				'https://servicesakara.cyclic.app',
				'https://github.com/mrmongkeyy/gemastorev2',
				'https://cegongshop.my.id/',
				'https://mrmongkeyy.github.io/tarikjendral'
			];
			location.href = hreflist[index];
		}
		findall('.insideleft .container').forEach((div,i)=>{
			div.index = i;
			const checkEvent = function(e){
				const mXpos = ((e.pageX)?e.pageX:e.touches[0].pageX)-(innerWidth*0.3);
				const dir = (mXpos<=innerWidth*0.7/2)?'right':'left';
				if(!contents[this.index].displayed){
					display(this.index,dir);
				}
			}
			const releaseEvent = function(e){
				if(contents[this.index].displayed){
					contents[this.index].displayed = false;
					if(find('.insideleft').querySelector('#bound'))find('.insideleft').querySelector('#bound').remove();
				}
			}
			div.onclick = function(){
				click(this.index);
			}
		})
	},
	nav:{
		aboutme(){
			const bound = makeElement('div',{
				id:'bound',
				className:'bound flex',
				onclick(){
					this.remove()
				}
			});
			const box = makeElement('div',{
				className:'box-flex flex',
				innerHTML:`
					<div>
						<div>
							Nama saya gema. Saya seorang game developer, dan juga software enginer.
							Programming language kesukaan saya adalah Javascript. Belajar coding 2 tahun. Saya bisa <span style=background:yellow>C++</span>, <span style=background:yellow>PHP</span>, <span style=background:yellow>Javascript</span>, <span style=background:yellow>GD script</span>, <span style=background:yellow>HTML</span>, <span style=background:yellow>CSS</span>, <span style=background:yellow>NodeJs</span>, and <span style=background:yellow>Python</span> tentu saja.
							Yang saya suka dari coding adalah design data struktur, flow app, dan debuging. Semuanya mengimprove cara berfikir. Saya akan terus belajar!
						</div>
						<div style=margin-top:20px;text-align:center;>
							Klik layar untuk menutup
						</div>
					</div>

				`
			});
			bound.appendChild(box);
			if(!find('body #bound')){
				find('body').appendChild(bound);
				find('#profileview').scrollIntoView();
				setTimeout(()=>{
					document.onscroll = (e)=>{bound.remove();document.onscroll=null};
				},500)
			}
		},
		contact(){
			const bound = makeElement('div',{
				id:'bound',
				className:'bound flex',
				onclick(){
					this.remove()
				}
			});
			const box = makeElement('div',{
				className:'box-flex flex',
				innerHTML:`
					<div style=width:100%;>
						<div style=margin-bottom:20px;>
							HUBUNGI SAYA DI:
						</div>
						<div style=display:flex;flex-direction:column;>
							<div
							style="
								margin-bottom:10px;
								display:flex;
								justify-content:space-between;
							"
							><span>GITHUB</span><span style=background:yellow>github.com/mrmongkeyy</span></div>
							<div
							style="
								margin-bottom:10px;
								display:flex;
								justify-content:space-between;
							"
							><span>GMAIL</span><span style=background:yellow>MRMONGKEYY@GMAIL.COM</span></div>
							<div
							style="
								display:flex;
								justify-content:space-between;
							"
							><span>WA</span><span style=background:yellow>0895605801484</span></div>
						</div>
						<div style=margin-top:20px;text-align:center;>
							Klik layar untuk menutup
						</div>
					</div>

				`
			});
			bound.appendChild(box);
			if(!find('body #bound')){
				find('body').appendChild(bound);
				find('#profileview').scrollIntoView();
				setTimeout(()=>{
					document.onscroll = (e)=>{bound.remove();document.onscroll=null};
				},500)
			}
		},
		articles(){
			const bound = makeElement('div',{
				id:'bound',
				className:'bound flex',
				onclick(){
					this.remove()
				}
			});
			const box = makeElement('div',{
				className:'box-flex flex',
				innerHTML:`
					<div>
						<div>
							Saya menulis artikel di <span style=background:yellow>hellodolphin.</span><br>Kamu juga bisa melakukannya.
						</div>
						<div style=margin-top:20px;text-align:center;>
							Klik layar untuk menutup
						</div>
					</div>

				`
			});
			bound.appendChild(box);
			if(!find('body #bound')){
				find('body').appendChild(bound);
				find('#profileview').scrollIntoView();
				setTimeout(()=>{
					document.onscroll = (e)=>{bound.remove();document.onscroll=null};
				},500)
			}
		},
		anouncement(){
			const bound = makeElement('div',{
				id:'bound',
				className:'bound flex',
				onclick(){
					this.remove()
				}
			});
			const box = makeElement('div',{
				className:'box-flex flex',
				innerHTML:`
					<div>
						<div style=margin-bottom:20px;>
							Developer tengah berusaha keras.<br>Semangat buat kamu!.
						</div>
						<div style=margin-top:20px;text-align:center;>
							Klik layar untuk menutup
						</div>
					</div>

				`
			});
			bound.appendChild(box);
			if(!find('body #bound')){
				find('body').appendChild(bound);
				find('#profileview').scrollIntoView();
				setTimeout(()=>{
					document.onscroll = (e)=>{bound.remove();document.onscroll=null};
				},500)
			}
		}
	}
}
infinityDreams.init();

const canvas = document.querySelector('canvas');
Object.assign(canvas,{
	width:innerWidth*.5,
	height:innerHeight*.5
});
const c = canvas.getContext('2d');



let bubbles = [];
const init = function(bubbleLen){
	for(let i=0;i<bubbleLen;i++){
		bubbles.push(new Circle({
			ctx:c,
			canvas
		}))
	}
	process();
}

const process = function(){
	//clearing the canvas.
	c.clearRect(0,0,canvas.width,canvas.height);
	bubbles.forEach(bubble=>{
		bubble.update();
	})
	requestAnimationFrame(process);
}
//init(50);