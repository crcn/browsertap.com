mongo browsertap-dev --eval "db.getCollectionNames().forEach(function(c) { if(!c.match('^system')) { db.getCollection(c).drop() } })";