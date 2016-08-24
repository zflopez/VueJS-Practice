new Vue({
	// Targets the div with id 'events'
	el: '#events',

	// Registers all the ViewModel data
	data: {
		event: { name: '', description: '', date: ''},
		events: []
	},

	// Loads everything within function when app loads
	ready: function() {

		// Method to initialize some data
		this.fetchEvents();
	},

	// Registers custom methods for the app
	methods: {

		// Retrieves and sets some data
		fetchEvents: function() {
			var events = [
				{
					id: 1,
					name: 'TIFF',
					description: 'Toronto International Film Festival',
					date: '2015-09-10'
				}, 
				{
					id: 2,
					name: 'The Martian Premiere',
					description: 'The Martian comes to theatres.',
					date: '2015-10-02'
				}, 
				{
					id: 3,
					name: 'SXSW',
					description: 'Music, film and interactive festival in Austin, TX.',
					date: '2016-03-11'
				}
			];

			// Vue method similar to pushing data onto array
			this.$set('events', events);
		},

		// Add new event to existing events array
		addEvent: function() {
			if(this.event.name) {
				this.events.push(this.event);
				this.event = { name: '', description: '', date: '' };
			}
		},

		deleteEvent: function(index) {
			if(confirm("Are you sure you want to delete this event?")) {
				this.events.splice(index, 1);
				//this.events.$remove(event);
			}
		}


	}
});