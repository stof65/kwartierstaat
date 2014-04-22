var mongoose = require( 'mongoose' );

var eventSchema = new mongoose.Schema({
	place: {type: String, required: false, default:'???'},
	date: {type: Date, required:false}
});
var personSchema = new mongoose.Schema({
	name: {type: String, required: true},
	birth: {type: [eventSchema], required:false}
});

var kwartierSchema = new mongoose.Schema({
	i1: [personSchema],
	i2: [personSchema],
	i3: [personSchema],
	i4: [personSchema],
	i5: [personSchema],
	i6: [personSchema],
	i7: [personSchema],
	i8: [personSchema],
	i9: [personSchema],
	i10: [personSchema],
	i11: [personSchema],
	i12: [personSchema],
	i13: [personSchema],
	i14: [personSchema],
	i15: [personSchema]	
});

mongoose.model('Kwartier', kwartierSchema);
/*
kwartier_KV = {
	i1: {name: 'Kristof Verschaetse', birth: {place: 'Menen', date: '1965-07-07'}},
	i2: {name: 'Maurits Verschaetse'},
	i3: {name: 'Nadia Samyn'},
	i4: {name: 'Raphael Gerardus Leonardus Verschaetse'},
	i5: {name: 'Marie-Madeleine Ide'},
	i6: {name: 'Cyriel Camiel Samyn'},
	i7: {name: 'Maria Theresia Lagae'},
	i8: {name: 'Odilon Joseph Jules Verschaetse'},
	i9: {name: 'Cesaria Cornelia De Wilde'},
	i10: {name: 'Maurits August Ide'},
	i11: {name: 'Madeleine-Louise Verraes'},
	i12: {name: 'Petrus Joannes Samyn'},
	i13: {name: 'Louise Mathilde Van Meenen'},
	i14: {name: 'Constant Ferdinand Lagae'},
	i15: {name: 'Maria Ludovica Wastyn'}		
};
*/