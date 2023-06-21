module.exports = {
	make(config){
		return `
			<!doctype html>
			<html>
				<head>
					<title>INFINITY DREAMS</title>
					<meta name=viewport content=width=device-width,initial-scale=1>
					<link rel=icon href=/file?fn=infinity.png>
					<style>
						@font-face{
							font-family:'goodone';
							src:url('/file?fn=sonosecond.ttf');
						}
						::-webkit-scrollbar{
							width:0;
						}
						body{
							font-family:cursive;
							user-select:none;
							-webkit-tap-highlight-color:transparent;
							margin:0;
							font-weight:normal;
							background:#e4edff;
						}
						.side{
							position:absolute;
							top:0;
							height:100%;
							width:100%;
						}
						.left{
							left:0;
							width:100%;
							display:flex;
							color:white;
							height:100%;
							flex-direction:column;
							align-items:flex-start;
						}
						.left img{
							width:50%;
						}
						.right{
							width:100%;
							flex-direction:column;
							align-items:center;
							display:flex;
							height:100%;
							justify-content:center;
						}
						.topBorder{
							display:none;
						}
						.container{
							margin:20px;
							width:80%;
							background:wheat;
							display:flex;
							justify-content:center;
							flex-direction:column;
							padding:10px;
							border:1px solid black;
							cursor:pointer;
						}
						.container span{
							display:flex;
							justify-content:center;
							align-items:center;
							padding:10px;
						}
						.container div{
							text-align:center;
							color:wheat;
							padding:5px;
						}
						.container div span{
							padding:5px ;
							display:inline-block;
							color:black;
							border-radius:20px 0 20px 0;
						}
						.bigfont{
							font-size:25px;
						}
						.insideleft{
							width:50%;
							display:flex;
							overflow:auto;
							flex-direction:row;
							align-items:center;
							justify-content:space-between;
							background:white;
							border:2px solid lightgray;
						}
						.insideleft span img{
							width:100%;
							height:100%;
							background:white;
							padding:5px;
							object-fit:cover;
							box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px, rgba(0, 0, 0, 0.14) 0px 2px 2px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
						}
						.insideleft .container:hover span{
							padding:none;
						}
						.insideleft .container:hover span img{
							opacity:1;
						}
						.container #title{
							font-size:20px;
						}
						.insideright{
							height:10%;
							width:50%;
							display:flex;
							flex-direction:row;
							align-items:center;
							justify-content:flex-start;
							
						}
						.insideright nav{
							display:flex;
							flex-direction:row;
							align-items:center;
						}
						.insideright nav div{
							padding: 20px 0 20px 0;
							font-size:15px;
							cursor:pointer;
							text-align:center;
							padding:10px;
						}
						.insideright nav div span:hover{
							text-decoration:underline;
						}
						span img{
							padding:2px;
							background:black;
						}
						.selected{
							text-decoration:underline;
						}
						.pop{
							background:white;
						}
						.insideright #copy{
							display:none;
						}
						#titleMobile{
							text-align:center;
							padding:10px;
							position:sticky;
							top:0;
						}
						.smallfont{
							font-weight:normal;
							font-size:smaller;
						}
						.bound{
							position:absolute;
							top:0;
							left:0;
							width:100%;
							height:100%;
							background:RGB(255,255,255,0.6);
						}
						.bound .box-flex{
							border-radius:10px;
							box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px, rgba(0, 0, 0, 0.14) 0px 2px 2px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
						}
						.flex{
							display:flex;
							justify-content:center;
							align-items:center;
						}
						.box{
							background:white;
							width:50%;
							height:50%;
						}
						.box-flex{
							background:white;
							padding:20px;
							width:30%;
						}
						@media screen and (max-width:532px){
							.left{
								width:100%;
							}
							.left #title{
								font-size:10px;
							}
							.right{
								width:100%;
								padding:0;
								height:auto;
							}
							.insideleft{
								flex-direction:column;
								width:95%;
							}
							.insideright{
								width:95%;
								height:100%;
								box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px, rgba(0, 0, 0, 0.14) 0px 2px 2px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
							}
							.topBorder{
								display:flex;
							}
							.insideleft .container{
							}
							.insideright #copy{
								display:inline-block;
								width:100%;
								text-align:center;
								font-size:12px;
								padding:12px;
							}
							.insideright{
								overflow:auto;
								justify-content:flex-start;
								background:white;
							}
							.insideright nav div{
								padding:0 10px 0 10px;
							}
							#titleMobile{
								display:inline-block;
							}
							.box{
								width:100%;
								height:100%;
							}
							.box-flex{
								width:100%;
							}
							.container{
								width:80%;
							}
							.container img{
								width:100%;
							}
						}
						@media screen and (max-width:900px){
							.left #title{
								font-size:15px;
							}
							.bigfont{
								font-size:15px;
							}
							.box{
								width:80%;
								height:80%;
							}
							.box-flex{
								width:100%;
							}
						}
					</style>
				</head>
				<body></body>
				<script src=/scripts?fn=infinity></script>
				<script src=/scripts?fn=infinityDreams></script>
				<script>
					window.onresize = ()=>{
						//location.reload();
					}
				</script>
			</html>
		`;
	}
}