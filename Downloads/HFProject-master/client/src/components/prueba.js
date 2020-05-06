new Vue({
    el: '#app',
    data () {
      return {
        search: '',
        headers: [,
          { text: 'Id plate', value: 'id_plate' },
          { text: 'Owner', value: 'owner' },
          { text: 'Pilot', value: 'pilot' },
          { text: 'Country', value: 'country' },
          { text: 'State', value: 'state' },
          { text: 'Last flight', value: 'last_flight' }
        ],
        flight_status: [
          {
           id_plate: 'HP2-078',
           owner: 'Hemav Foundation',
           pilot:'Carlos',
           country:'Mauritania',
           state:'Ready to flight',
           last_flight: '20/03/2020'
 
          },
          {
            id_plate: 'HP2-079',
            owner: 'Hemav Foundation',
            pilot:'Carola',
            country:'Mauritania',
            state:'Ready to flight',
            last_flight: '20/03/2020'
 
          },
          {
            id_plate: 'HP2-060',
            owner: 'Hemav Foundation',
            pilot:'Juan',
            country:'Mauritania',
            state:'Ready to flight',
            last_flight: '20/03/2020'
          },
          {
            id_plate: 'HP2-068',
            owner: 'Hemav Foundation',
            pilot:'Santi',
            country:'Mauritania',
            state:'Ready to flight',
            last_flight: '20/03/2020'

          },

        ]
      }
    }
  })