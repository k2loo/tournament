
// let uri = './data.json';
// let req = new Request(uri, {method: 'GET'});
// document.addEventListener('DOMContentLoaded', init);

Vue.component('shd', {
	data: function () {
		return {
			abbr: 'SHD',
			city: 'Shanghai',
			team: 'Dragons',
			logo: 'dragons.svg',
			bgcolor: '#d22630'
		}
	},
	template: '<div id="shd" class="badge">{{ city }} {{team}}</br><img src="/img/team-logos/dragons.svg" alt=""></div>'
})

new Vue({ el: '.shd' })

Vue.component('dal', {
	data: function () {
		return {
			abbr: 'DAL',
			city: 'Dallas',
			team: 'Fuel',
			logo: 'fuel.svg',
			bgcolor: '#0B233F'
		}
	},
	template: '<div id="dal" class="badge">{{ city }} {{team}}</br><img src="/img/team-logos/fuel.svg" alt=""></div>'
})

new Vue({ el: '.dal' })

new Vue(
	{
		el: '#LDN',
		data: {
			"GZC": {
				"abbr": "GZC",
				"city": "Guangzhou",
				"team": "Charge",
				"logo": "charge.svg",
				"bgcolor": ""
			},
			"TOR": {
				"abbr": "TOR",
				"city": "Toronto",
				"team": "Defiant",
				"logo": "defiant.svg",
				"bgcolor": ""
			},
			"SHD": {
				"abbr": "SHD",
				"city": "Shanghai",
				"team": "Dragons",
				"logo": "dragons.svg",
				"bgcolor": "#d22630"
			},
			"SEO": {
				"abbr": "SEO",
				"city": "Seoul",
				"team": "Dynasty",
				"logo": "dynasty.svg",
				"bgcolor": ""
			},
			"PAR": {
				"abbr": "PAR",
				"city": "Paris",
				"team": "Eternal",
				"logo": "eternal.svg",
				"bgcolor": ""
			},
			"NYE": {
				"abbr": "NYE",
				"city": "New York",
				"team": "Excelsior",
				"logo": "excelsior.svg",
				"bgcolor": "#171c38"
			},
			"DAL": {
				"abbr": "DAL",
				"city": "Dallas",
				"team": "Fuel",
				"logo": "fuel.svg",
				"bgcolor": "#0B233F"
			},
			"PHI": {
				"abbr": "PHI",
				"city": "Philadelphia",
				"team": "Fusion",
				"logo": "fusion.svg",
				"bgcolor": "#000000"
			},
			"GLA": {
				"abbr": "GLA",
				"city": "Los Angeles",
				"team": "Gladiators",
				"logo": "gladiators.svg",
				"bgcolor": "#381460"
			},
			"CDH": {
				"abbr": "CDH",
				"city": "Chengdu",
				"team": "Hunters",
				"logo": "hunters.svg",
				"bgcolor": ""
			},
			"WAS": {
				"abbr": "WAS",
				"city": "Washington",
				"team": "Justice",
				"logo": "justice.svg",
				"bgcolor": ""
			},
			"FLA": {
				"abbr": "FLA",
				"city": "Florida",
				"team": "Mayhem",
				"logo": "mayhem.svg",
				"bgcolor": ""
			},
			"HOU": {
				"abbr": "HOU",
				"city": "Houston",
				"team": "Outlaws",
				"logo": "outlaws.svg",
				"bgcolor": ""
			},
			"ATL": {
				"abbr": "ATL",
				"city": "Atlanta",
				"team": "Reign",
				"logo": "reign.svg",
				"bgcolor": ""
			},
			"SFS": {
				"abbr": "SFS",
				"city": "San Francisco",
				"team": "Shock",
				"logo": "shock.svg",
				"bgcolor": ""
			},
			"HZS": {
				"abbr": "HZS",
				"city": "Hangzhou",
				"team": "Spark",
				"logo": "spark.svg",
				"bgcolor": "#fb7299"
			},
			"LDN": {
				"abbr": "LDN",
				"city": "London",
				"team": "Spitfire",
				"logo": "spitfire.svg",
				"bgcolor": "#59CAE8"
			},
			"VAN": {
				"abbr": "VAN",
				"city": "Vancouver",
				"team": "Titans",
				"logo": "titans.svg",
				"bgcolor": ""
			},
			"BOS": {
				"abbr": "BOS",
				"city": "Boston",
				"team": "Uprising",
				"logo": "uprising.svg",
				"bgcolor": "#174B97"
			},
			"VAL": {
				"abbr": "VAL",
				"city": "Los Angeles",
				"team": "Valiant",
				"logo": "valiant.svg",
				"bgcolor": ""
			}
		}
	}
),

	new Vue(
		{
			el: '#VAL',
			data: {
				"VAL": {
					"abbr": "VAL",
					"city": "Los Angeles",
					"team": "Valiant",
					"logo": "valiant.svg",
					"bgcolor": "#2A7230"
				}
			}
		}
	)