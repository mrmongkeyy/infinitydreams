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
							font-family:goodone;
							user-select:none;
							-webkit-tap-highlight-color:transparent;
							margin:0;
						}
						.side{
							position:absolute;
							top:0;
							height:100%;
							display:flex;
							flex-direction:column;
						}
						.left{
							left:0;
							width:30%;
							display:flex;
							align-items:center;
							justify-content:center;
							color:white;
						}
						.left img{
							width:50%;
							opacity:1;
						}
						.right{
							right:0;
							width:70%;
							display:flex;
							flex-direction:column;
							font-weight:bold;
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
							background:white;
						}
						.bigfont{
							font-size:25px;
							font-weight:bold;
						}
						.insideleft{
							height:80%;
							width:100%;
							display:flex;
							overflow:auto;
							flex-direction:row;
							align-items:center;
							justify-content:space-between;
							scrollbar-width:none;
						}
						.insideleft span img{
							width:200px;
							height:200px;
							background:white;
							padding:5px;
							object-fit:cover;
						}
						.insideleft .container:hover span{
							padding:none;
						}
						.insideleft .container:hover span img{
							width:210px;
							height:210px;
							opacity:1;
						}
						.container #title{
							font-size:20px;
						}
						.insideright{
							height:10%;
							width:100%;
							display:flex;
							flex-direction:row;
							align-items:center;
							justify-content:flex-end;
						}
						.insideright nav{
							display:flex;
							flex-direction:row;
							align-items:center;
						}
						.insideright nav div{
							padding: 20px 0 20px 0;
							font-size:15px;
							font-weight:bold;
							cursor:pointer;
							text-align:center;
							padding:10px;
						}
						.insideright nav div span:hover{
							text-decoration:underline;
						}
						span img{
							padding:20px;
							background:#ffffff45;
							opacity:.6;
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
							display:none;
							text-align:center;
							padding:10px;
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
							background:RGB(0,0,0,0.5);
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
								display:none;
							}
							.left #title{
								font-size:10px;
							}
							.right{
								width:100%;
							}
							.insideleft{
								flex-direction:column;
							}
							.insideleft .container{
								padding:100px 0 100px 0;
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
								background:#ffffffc2;
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
			</html>
		`;
	}
}