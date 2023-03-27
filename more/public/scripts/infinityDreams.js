
const infinityDreams = {
	pageSetup(){
		const main = makeElement('main',{
			innerHTML:`
				<div class='side left'>
					<div class=container style=border:none;background:none;>
						<div style=font-weight:bold;background:white; id=title>
							<span>"InfiniyDreams"</span>
						</div>
					</div>
					<div class=container style=background:none;border:none;>
						<span>
							<img src=/file?fn=profile.png>
						</span>
						<div>
							<span>CEO/CTO</span>
						</div>
						<div class=bigfont>
							<span>GEMA/MRMONGKEYY</span>
						</div>
						<div>
							<span>"Cause Mydream Must Be Reality"</span>
						</div>
					</div>
					<div class=container style=border:none;background:none;>
						<div style=font-size:15px;font-weight:bold;background:white;>
							<span>MRMONGKEYY &COPY2023.</span>
						</div>
					</div>
				</div>
				<div class='side right'>
					<div id=titleMobile>
						<span>InfinityDreams</span>
					</div>
					<div class='insideright desktopmenu'>
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
								<span><a href=https://saweria.co/mrmongkeyy style=color:white>Donasi</a></span>
							</div>
						</nav>
					</div>
					<div class=insideleft>
						<div class=container style=background:white;height:100px;width:200px;border:none;background:none; for=hellodolphin>
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
						<div class=container style=background:white;height:100px;width:200px;border:none;background:none;>
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
						<div class=container style=background:white;height:100px;width:200px;border:none;background:none;>
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
						<div class=container style=background:white;height:100px;width:200px;border:none;background:none;>
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
						<div class=container style=background:white;height:100px;width:200px;border:none;background:none;>
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
						<div class=container style=background:white;height:100px;width:200px;border:none;background:none;>
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
						<div class=container style=background:white;height:100px;width:200px;border:none;background:none;>
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
						<div class=container style=background:white;height:100px;width:200px;border:none;background:none;>
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
					</div>
					<div class=insideright>
						<div id=copy>
							<span>&copy 2023. MRMONGKEYY</span>
						</div>
					</div>
				</div>
				<div class=pop>
					
				</div>
			`
		});
		document.body.appendChild(main);
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
						border:1px solid black;
						display:flex;
						justify-content:center;
						flex-direction:column;
						padding:10px;
						margin:10px;
					`,
					innerHTML:`
						<div style=margin-bottom:10px;>${content.title} {${content.language}}</div>
						<div class=smallfont>${content.description}</div>
						<div style=margin-top:10px;>KLIK UNTUK MELIHAT LEBIH</div>
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
				'https://mrx.cyclic.app',
				'https://github.com/mrmongkeyy/gamastudio',
				'https://github.com/mrmongkeyy/eagleswar',
				'https://github.com/mrmongkeyy/bananaconsole',
				'https://github.com/mrmongkeyy/bananaconsole/tree/main/infinityRoads',
				'https://github.com/mrmongkeyy/bananaconsole/tree/main/faraway',
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
			div.ontouchstart = checkEvent
			div.onmouseover = checkEvent;
			div.onmouseout = releaseEvent;
			div.ontouchend = releaseEvent;
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
							Programming language kesukaan saya adalah Javascript. Belajar coding 2 tahun. Saya ngerti C++, PHP, Javascript, GD script, HTML, CSS, NodeJs.
							Yang saya suka dari coding adalah design data struktur, flow app, dan debuging. Semuanya mengimvrove cara berfikir. Saya akan terus belajar!
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
					<div>
						<div style=margin-bottom:20px;>
							HUBUNGI SAYA DI:
						</div>
						<div style=display:flex;flex-direction:column;>
							<div>GITHUB: github.com/mrmongkeyy</div>
							<div>GMAIL: MRMONGKEYY@GMAIL.COM</div>
							<div>WA: 0895605801484</div>
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
							Saya menulis artikel di hellodolphin.<br>Kamu juga bisa melakukannya.
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
			}
		}
	}
}
infinityDreams.init();