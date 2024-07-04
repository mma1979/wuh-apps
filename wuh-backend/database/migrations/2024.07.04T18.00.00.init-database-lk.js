'use strict'

async function up(knex) {

    // insert categories
    //await knex('categories').insert({name:'Platform', locale:'en', published_at: new Date().toLocaleDateString()})
    var date = new Date().toLocaleDateString()
    await knex.raw(`INSERT INTO public.categories(
	id, name, created_at, updated_at, published_at, created_by_id, updated_by_id, locale)
	VALUES (?, ?, ?, ?, ?, ?, ?, ?);`, ['1', 'Literature', date,date,date,'1','1','en'])
}

module.exports = { up };