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
					date: '2016-09-08'
				}, 
				{
					id: 2,
					name: 'Sundance Film Festival',
					description: 'Sundance Film Festival',
					date: '2017-01-19'
				}, 
				{
					id: 3,
					name: 'SXSW',
					description: 'Music, film and interactive festival in Austin, TX.',
					date: '2017-03-10'
				}
			];

			// Vue method similar to pushing data onto array
			this.$set('events', events);


			/* Requests data from endpoint

			this.$http.get('api/events').success(function(events) {
  				this.$set('events', events);
			}).error(function(error) {
  				console.log(error);
			});

			*/

			/* If endpoint responds to POST requests

			this.$http.post('api/events', this.event).success(function(response) {
  				this.events.push(this.event);
  				console.log("Event added!");
			}).error(function(error) {
  				console.log(error);
			});
			
			*/
		},

		// Adds new event to existing events array
		addEvent: function() {
			if(this.event.name) {
				this.events.push(this.event);
				this.event = { name: '', description: '', date: '' };
			}
		},

		// Deletes concrete event from events array
		deleteEvent: function(index) {
			if(confirm("Are you sure you want to delete this event?")) {
				this.events.splice(index, 1);
				//this.events.$remove(event);		// requires putting 'event' as parameter in v-on:click='deleteEvent()'
			}
		}

	}
});