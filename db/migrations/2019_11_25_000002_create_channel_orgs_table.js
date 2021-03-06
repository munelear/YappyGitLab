exports.up = knex =>
    knex.schema.createTable('channel_orgs', t => {
        t.increments('id');

        t.string('channel_id');
        t.string('name').index();

        t.foreign('channel_id')
            .references('channels.id')
            .onDelete('cascade');
    });

exports.down = knex => knex.schema.dropTable('channel_orgs');
