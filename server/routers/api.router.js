const Router = require('koa-router');
const db = require('../libs/database');

let router = new Router();

//collect
router.get('collect/:type/:data/', async ctx=>{
	let {type,data}=ctx.params;

	await db.insert('collect_table',{type,data});

	ctx.body={OK:true}
})

//restaurant
router.get('restaurant/:page/:size/',async ctx=>{
	let {page,size} = ctx.params;
	if(isNaN(page)){
	    page=0;
	}

	if(isNaN(size)){
	    size=8;
	}

	ctx.body = await db.query(`SELECT * FROM restaurant_table LIMIT ${page*size},${size}`);
})

//menu
router.get('menu/:restaurant_id/',async ctx=>{
	let {restaurant_id} = ctx.params;

	ctx.body = await db.select('menu_table','*',{restaurant_id});
})

//cart
router.post('cart/:item_id/:count/',async ctx=>{
	let {item_id,count} = ctx.params;
	let user_id = ctx.user_id;

	//1.有没有
	let rows = await db.select('cart_table','ID,count',{item_id,user_id});

	if(rows.length == 0){
		await db.insert('cart_table',{user_id,item_id,count});
	}else{
		let row = rows[0];

		await db.update('cart_table',row.ID,{count:Number(row.count)+Number(count)});
	}
})

//delete
router.delete('cart/:item_id/',async ctx=>{
	let {item_id} = ctx.params;
	let user_id = ctx.user_id;

	await db.delete('cart_table',{item_id,user_id});

	ctx.body={OK:true}
})
module.exports=router.routes();