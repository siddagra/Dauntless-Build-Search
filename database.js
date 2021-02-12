onst cellType = [
	'None',
	'Defence',
	'Mobility',
	'Power',
	'Technique',
	'Utility'
];

const weaponType = [
	'Aether Strikers',
	'Chain Blades',
	'Axe',
	'War Pike',
	'Sword',
	'Hammer',
	'Repeater'
];

const armorType = [
	'Head',
	'Torso',
	'Arms',
	'Legs'
];

const idList = [
	'Agarus',
	'Boreus',
	'Charrogg Exotic',
	'Charrogg',
	'Drask',
	'Embermane',
	'Generic',
	'Gnasher',
	'Hellion',
	'Kharabak',
	'Koshai',
	'Malkarion',
	'Nayzaga',
	'Pangar',
	'Quillshot',
	'Rezakiri',
	'Rezakiri Exotic',
	'Riftstalker',
	'Shrike',
	'Shrowd',
	'Shrowd Exotic',
	'Skarn',
	'Skraev',
	'Stormclaw',
	'Thrax',
	'Torgadoro',
	'Urska',
	'Valomyr',
	'Generic Exotic'
];

const perkList = [
	[
		{
			name: 'None',
			index: 0,
			type: {
				name: 'None',
				index: 0
			},
			description: 'No effect',
			key: 'no_effect',
			effect: [
				{
					description: 'No effect',
					value: 0
				},
				{
					description: 'No effect',
					value: 0
				},
				{
					description: 'No effect.',
					value: 0
				},
				{
					description: 'No effect.',
					value: 0
				},
				{
					description: 'No effect.',
					value: 0
				},
				{
					description: 'No effect.',
					value: 0
				}
			],
			DBmap: 0,
			map: 0,
			j: 0,
			k: 0
		}
	],
	[
		{
			name: 'Assassin\'s Vigour',
			index: 8,
			type: 'Defence',
			key: 'part_break_heal',
			description: 'Grants Health after breaking a Behemoth part.',
			effects: [
				{
					description: 'Heal 50 when you break a part',
					value: 50
				},
				{
					description: 'Heal 100 when you break a part',
					value: 100
				},
				{
					description: 'Heal 150 when you break a part',
					value: 150
				},
				{
					description: 'Heal 200 when you break a part',
					value: 200
				},
				{
					description: 'Heal 250 when you break a part',
					value: 250
				},
				{
					description: 'Heal 300 when you break a part',
					value: 300
				}
			]
		},
		{
			name: 'Bloodless',
			index: 12,
			type: 'Defence',
			key: [
				'wound_reduction',
				'crippling_wound_reduction'
			],
			description: 'Protects against Wounded and Crippling Wounds statuses.',
			effects: [
				{
					description: [
						'Reduces duration of Wounded status by 50%',
						null
					],
					value: [
						-0.5,
						null
					]
				},
				{
					description: [
						'Reduces duration of Wounded status by 80%',
						null
					],
					value: [
						-0.8,
						null
					]
				},
				{
					description: [
						'Immune to Wounded status',
						null
					],
					value: [
						-1,
						null
					]
				},
				{
					description: [
						'Immune to Wounded status',
						'Reduces effectiveness of Crippling Wounded status by 50%'
					],
					value: [
						-1,
						-0.5
					]
				},
				{
					description: [
						'Immune to Wounded status',
						'Reduces effectiveness of Crippling Wounded status by 80%'
					],
					value: [
						-1,
						-0.8
					]
				},
				{
					description: [
						'Immune to Wounded status',
						'Immune to Crippling Wound status'
					],
					value: [
						-1,
						-1
					]
				}
			]
		},
		{
			name: 'Fireproof',
			index: 25,
			type: 'Defence',
			key: 'fire_immunity',
			description: 'Protects against being set on fire.',
			effects: [
				{
					description: 'Reduces duration of On Fire status by 10%',
					value: -0.1
				},
				{
					description: 'Reduces duration of On Fire status by 20%',
					value: -0.2
				},
				{
					description: 'Reduces duration of On Fire status by 40%',
					value: -0.4
				},
				{
					description: 'Reduces duration of On Fire status by 60%',
					value: -0.6
				},
				{
					description: 'Reduces duration of On Fire status by 80%',
					value: -0.8
				},
				{
					description: 'Immune to being set on fire.',
					value: -1
				}
			]
		},
		{
			name: 'Fortress',
			index: 27,
			type: 'Defence',
			key: 'not_hit_health_shield',
			description: 'Grants a small shield after avoiding damage for a short time.',
			effects: [
				{
					description: 'Grants a 10 health shield after not getting hit for 10s',
					value: 10
				},
				{
					description: 'Grants a 20 health shield after not getting hit for 10s',
					value: 20
				},
				{
					description: 'Grants a 40 health shield after not getting hit for 10s',
					value: 40
				},
				{
					description: 'Grants a 60 health shield after not getting hit for 10s',
					value: 60
				},
				{
					description: 'Grants a 80 health shield after not getting hit for 10s',
					value: 80
				},
				{
					description: 'Grants a 100 health shield after not getting hit for 10s',
					value: 100
				}
			]
		},
		{
			name: 'Guardian',
			index: 29,
			type: 'Defence',
			key: 'shield_share',
			description: 'Grant a portion of any shield applied to your nearest ally.',
			effects: [
				{
					description: '+10% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 10
				},
				{
					description: '+20% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 20
				},
				{
					description: '+30% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 30
				},
				{
					description: '+40% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 40
				},
				{
					description: '+50% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 50
				},
				{
					description: '+60% of shield applied to you is also applied to your nearest ally for 15s.',
					value: 60
				}
			]
		},
		{
			name: 'Iceborne',
			index: 30,
			type: 'Defence',
			key: [
				'DecreasedDamageTaken',
				'IceborneLifesteal'
			],
			description: 'Increases Defence when at low health, and at later ranks, grants life steal',
			effects: [
				{
					description: [
						'When under 50% health, grants +5% decreased damage taken',
						null
					],
					value: [
						0.05,
						null
					]
				},
				{
					description: [
						'When under 50% health, grants +10% decreased damage taken',
						null
					],
					value: [
						0.1,
						null
					]
				},
				{
					description: [
						'When under 50% health, grants +15% decreased damage taken',
						null
					],
					value: [
						0.15,
						null
					]
				},
				{
					description: [
						'When under 50% health, grants +20% decreased damage taken',
						'While Iceborne is active, grants 4% lifesteal that cannot heal beyond 50% health'
					],
					value: [
						0.2,
						0.04
					]
				},
				{
					description: [
						'When under 50% health, grants +25% decreased damage taken',
						'While Iceborne is active, grants 6% lifesteal that cannot heal beyond 50% health'
					],
					value: [
						0.25,
						0.06
					]
				},
				{
					description: [
						'When under 50% health, grants +30% decreased damage taken',
						'While Iceborne is active, grants 8% lifesteal that cannot heal beyond 50% health'
					],
					value: [
						0.3,
						0.08
					]
				}
			]
		},
		{
			name: 'Insulated',
			index: 31,
			type: 'Defence',
			key: [
				'shock_immunity',
				'percent_part_damage'
			],
			description: 'Protects against Shocked status effect and allows you to attack electric shields.',
			effects: [
				{
					description: [
						'Reduces duration of Shocked status by 25%',
						null
					],
					value: [
						-0.25,
						null
					]
				},
				{
					description: [
						'Reduces duration of Shocked status by 50%',
						null
					],
					value: [
						-0.5,
						null
					]
				},
				{
					description: [
						'Reduces duration of Shocked status by 75%',
						null
					],
					value: [
						-0.75,
						null
					]
				},
				{
					description: [
						'Reduces duration of Shocked status by 75%',
						'Reduces knockback and damage of hitting electrified shields'
					],
					value: [
						-0.75,
						null
					]
				},
				{
					description: [
						'Reduces duration of Shocked status by 75%',
						'Prevents knockback and damage of hitting electrified shields'
					],
					value: [
						-0.75,
						null
					]
				},
				{
					description: [
						'Immune to Shocked status',
						'Prevents knockback and damage of hitting electrified shields'
					],
					value: [
						-1,
						null
					]
				}
			]
		},
		{
			name: 'Nine Lives',
			index: 39,
			type: 'Defence',
			key: [
				'half_damage',
				'death_heal'
			],
			description: 'Grants a chance to reduce damage, and later the ability to cheat death.',
			effects: [
				{
					description: [
						'+5% chance to halve incoming damage',
						null
					],
					value: [
						0.05,
						null
					]
				},
				{
					description: [
						'+8% chance to halve incoming damage',
						null
					],
					value: [
						0.08,
						null
					]
				},
				{
					description: [
						'+12% chance to halve incoming damage',
						null
					],
					value: [
						0.12,
						null
					]
				},
				{
					description: [
						'+12% chance to halve incoming damage',
						'The first time you would be knocked out stay up and heal for 400'
					],
					value: [
						0.12,
						400
					]
				},
				{
					description: [
						'+16% chance to halve incoming damage',
						'The first time you would be knocked out stay up and heal for 400'
					],
					value: [
						0.16,
						400
					]
				},
				{
					description: [
						'+20% chance to halve incoming damage',
						'The first time you would be knocked out stay up and heal for 400 and become empowered for 10 seconds'
					],
					value: [
						0.2,
						400
					]
				}
			]
		},
		{
			name: 'Parasitic',
			index: 42,
			type: 'Defence',
			key: 'Parasitic',
			description: 'When you take damage, it gets delayed and instead dealt over time. While taking delayed damage, gain lifesteal.',
			effects: [
				{
					description: 'When you take damage, 10% of it is delayed and instead dealt over 10 seconds. While you take delayed damage, gain 5% lifesteal. Does not apply to damage under 10% of your max HP.\n',
					value: 0.1
				},
				{
					description: 'When you take damage, 15% of it is delayed and instead dealt over 10 seconds. While you take delayed damage, gain 5% lifesteal. Does not apply to damage under 10% of your max HP.\n',
					value: 0.15
				},
				{
					description: 'When you take damage, 20% of it is delayed and instead dealt over 10 seconds. While you take delayed damage, gain 5% lifesteal. Does not apply to damage under 10% of your max HP.\n',
					value: 0.2
				},
				{
					description: 'When you take damage, 25% of it is delayed and instead dealt over 10 seconds. While you take delayed damage, gain 5% lifesteal. Does not apply to damage under 10% of your max HP.\n',
					value: 0.25
				},
				{
					description: 'When you take damage, 30% of it is delayed and instead dealt over 10 seconds. While you take delayed damage, gain 5% lifesteal. Does not apply to damage under 10% of your max HP.\n',
					value: 0.3
				},
				{
					description: 'When you take damage, 35% of it is delayed and instead dealt over 10 seconds. While you take delayed damage, gain 5% lifesteal. Does not apply to damage under 10% of your max HP.\n',
					value: 0.35
				}
			]
		},
		{
			name: 'Shellshock Resist',
			index: 48,
			type: 'Defence',
			key: 'shellshock_immunity',
			description: 'Protects against the explosion damage and status effect of Shellshock.',
			effects: [
				{
					description: 'Reduces Shell Shocked explosion damage and status effect duration by 10%',
					value: -0.1
				},
				{
					description: 'Reduces Shell Shocked explosion damage and status effect duration by 20%',
					value: -0.2
				},
				{
					description: 'Reduces Shell Shocked explosion damage and status effect duration by 40%',
					value: -0.4
				},
				{
					description: 'Reduces Shell Shocked explosion damage and status effect duration by 60%',
					value: -0.6
				},
				{
					description: 'Reduces Shell Shocked explosion damage and status effect duration by 80%',
					value: -0.8
				},
				{
					description: 'Immune to Shell Shocked explosion damage and status effect',
					value: -1
				}
			]
		},
		{
			name: 'Strategist',
			index: 50,
			type: 'Defence',
			key: 'ShieldShare',
			description: 'Reduces max health. Dodging through Behemoth attacks grants health shields to all Slayers.',
			effects: [
				{
					description: 'After dodging through an attack, grant 50 health shield to all slayers',
					value: 50
				},
				{
					description: 'After dodging through an attack, grant 75 health shield to all slayers',
					value: 75
				},
				{
					description: 'After dodging through an attack, grant 100 health shield to all slayers',
					value: 100
				},
				{
					description: 'After dodging through an attack, grant 125 health shield to all slayers',
					value: 125
				},
				{
					description: 'After dodging through an attack, grant 150 health shield to all slayers',
					value: 150
				},
				{
					description: 'After dodging through an attack, grant 175 health shield to all slayers',
					value: 175
				}
			]
		},
		{
			name: 'Sturdy',
			index: 52,
			type: 'Defence',
			key: 'stagger_prevention',
			description: 'Prevents being staggered on a cooldown.',
			effects: [
				{
					description: 'Prevents you from being staggered (30 second cooldown)',
					value: 120
				},
				{
					description: 'Prevents you from being staggered (25 second cooldown)',
					value: 100
				},
				{
					description: 'Prevents you from being staggered (20 second cooldown)',
					value: 80
				},
				{
					description: 'Prevents you from being staggered (15 second cooldown)',
					value: 60
				},
				{
					description: 'Prevents you from being staggered (10 second cooldown)',
					value: 40
				},
				{
					description: 'Prevents you from being staggered (5 second cooldown)',
					value: 15
				}
			]
		},
		{
			name: 'Tough',
			index: 55,
			type: 'Defence',
			key: [
				'max_hp',
				'increased_healing'
			],
			description: 'Increases Max Health.',
			effects: [
				{
					description: [
						'Increases Max Health by 50',
						'Increased healing from all sources by 5%'
					],
					value: [
						50,
						0.05
					]
				},
				{
					description: [
						'Increases Max Health by 100',
						'Increased healing from all sources by 10%'
					],
					value: [
						100,
						0.1
					]
				},
				{
					description: [
						'Increases Max Health by 150',
						'Increased healing from all sources by 15%'
					],
					value: [
						150,
						0.15
					]
				},
				{
					description: [
						'Increases Max Health by 250',
						'Increased healing from all sources by 25%'
					],
					value: [
						250,
						0.25
					]
				},
				{
					description: [
						'Increases Max Health by 300',
						'Increased healing from all sources by 35%'
					],
					value: [
						300,
						0.35
					]
				},
				{
					description: [
						'Increases Max Health by 500',
						'Increased healing from all sources by 50%'
					],
					value: [
						500,
						0.5
					]
				}
			]
		},
		{
			name: 'Warmth',
			index: 57,
			type: 'Defence',
			key: [
				'frozen_immunity',
				'chilled_immunity'
			],
			description: 'Protects against Chilled and Frozen status effects.',
			effects: [
				{
					description: [
						'Reduces duration of Frozen status by 30%',
						null
					],
					value: [
						-0.3,
						null
					]
				},
				{
					description: [
						'Reduces duration of Frozen status by 60%',
						null
					],
					value: [
						-0.6,
						null
					]
				},
				{
					description: [
						'Immune to being Frozen',
						null
					],
					value: [
						-1,
						null
					]
				},
				{
					description: [
						'Immune to being Frozen',
						'Reduces duration of Chilled status by 30%'
					],
					value: [
						-1,
						-0.3
					]
				},
				{
					description: [
						'Immune to being Frozen',
						'Reduces duration of Chilled status by 60%'
					],
					value: [
						-1,
						-0.6
					]
				},
				{
					description: [
						'Immune to being Frozen',
						'Immune to being Chilled'
					],
					value: [
						-1,
						-1
					]
				}
			]
		}
	],
	[
		{
			name: 'Agility',
			index: 7,
			type: 'Mobility',
			key: 'dodge_cost_reduction',
			description: 'Reduces the stamina cost of dodging.',
			effects: [
				{
					description: '-10% Dodge Roll Stamina Cost',
					value: -0.1
				},
				{
					description: '-20% Dodge Roll Stamina Cost',
					value: -0.2
				},
				{
					description: '-30% Dodge Roll Stamina Cost',
					value: -0.3
				},
				{
					description: '-40% Dodge Roll Stamina Cost',
					value: -0.4
				},
				{
					description: '-55% Dodge Roll Stamina Cost',
					value: -0.55
				},
				{
					description: '-70% Dodge Roll Stamina Cost',
					value: -0.7
				}
			]
		},
		{
			name: 'Conditioning',
			index: 15,
			type: 'Mobility',
			key: 'stamina_regen',
			description: 'Increases Stamina Regen.',
			effects: [
				{
					description: '+5 Stamina Regeneration',
					value: 5
				},
				{
					description: '+10 Stamina Regeneration',
					value: 10
				},
				{
					description: '+15 Stamina Regeneration',
					value: 15
				},
				{
					description: '+20 Stamina Regeneration',
					value: 20
				},
				{
					description: '+25 Stamina Regeneration',
					value: 25
				},
				{
					description: '+30 Stamina Regeneration',
					value: 30
				}
			]
		},
		{
			name: 'Endurance',
			index: 20,
			type: 'Mobility',
			key: 'max_stamina',
			description: 'Increases Max Stamina.',
			effects: [
				{
					description: 'Increases Max Stamina by 10',
					value: 10
				},
				{
					description: 'Increases Max Stamina by 20',
					value: 20
				},
				{
					description: 'Increases Max Stamina by 40',
					value: 40
				},
				{
					description: 'Increases Max Stamina by 60',
					value: 60
				},
				{
					description: 'Increases Max Stamina by 80',
					value: 80
				},
				{
					description: 'Increases Max Stamina by 100',
					value: 100
				}
			]
		},
		{
			name: 'Evasion',
			index: 23,
			type: 'Mobility',
			key: 'iframe_increase',
			description: 'Increases the time you are invincible when dodging.',
			effects: [
				{
					description: 'Increases Dodge invulnerability windows by 7%',
					value: 0.07
				},
				{
					description: 'Increases Dodge invulnerability windows by 14%',
					value: 0.14
				},
				{
					description: 'Increases Dodge invulnerability windows by 21%',
					value: 0.21
				},
				{
					description: 'Increases Dodge invulnerability windows by 28%',
					value: 0.28
				},
				{
					description: 'Increases Dodge invulnerability windows by 35%',
					value: 0.35
				},
				{
					description: 'Increases Dodge invulnerability windows by 42%',
					value: 0.42
				}
			]
		},
		{
			name: 'Fleet Footed',
			index: 26,
			type: 'Mobility',
			key: 'dodge_movement_speed',
			description: 'Temporarily increases Movement Speed after a dodge.',
			effects: [
				{
					description: 'Following a Dodge, Movement Speed is increased by 10% for 3 seconds',
					value: 1.1
				},
				{
					description: 'Following a Dodge, Movement Speed is increased by 15% for 3 seconds',
					value: 1.15
				},
				{
					description: 'Following a Dodge, Movement Speed is increased by 20% for 3 seconds',
					value: 1.2
				},
				{
					description: 'Following a Dodge, Movement Speed is increased by 25% for 3 seconds',
					value: 1.25
				},
				{
					description: 'Following a Dodge, Movement Speed is increased by 30% for 3 seconds',
					value: 1.3
				},
				{
					description: 'Following a Dodge, Movement Speed is increased by 35% for 3 seconds',
					value: 1.35
				}
			]
		},
		{
			name: 'Grace',
			index: 28,
			type: 'Mobility',
			key: [
				'IncreasedMovementSpeed',
				'IncreasedAttackSpeed'
			],
			description: 'Sprinting increases movespeed. At higher levels, converts increased movespeed to attack speed.',
			effects: [
				{
					description: [
						'While sprinting',
						'gain movespeed up to 5%',
						null
					],
					value: [
						0.05,
						null
					]
				},
				{
					description: [
						'While sprinting',
						'gain movespeed up to 8%',
						null
					],
					value: [
						0.08,
						null
					]
				},
				{
					description: [
						'While sprinting',
						'gain movespeed up to 11%',
						null
					],
					value: [
						0.11,
						null
					]
				},
				{
					description: [
						'While sprinting',
						'gain movespeed up to 14%',
						'After sprinting, gain attack speed equal to Grace\'s bonus movespeed for 10 seconds'
					],
					value: [
						0.14,
						0.14
					]
				},
				{
					description: [
						'While sprinting',
						'gain movespeed up to 17%',
						'After sprinting, gain attack speed equal to Grace\'s bonus movespeed for 10 seconds'
					],
					value: [
						0.17,
						0.17
					]
				},
				{
					description: [
						'While sprinting',
						'gain movespeed up to 20%',
						'After sprinting, gain attack speed equal to Grace\'s bonus movespeed for 10 seconds'
					],
					value: [
						0.2,
						0.2
					]
				}
			]
		},
		{
			name: 'Nimble',
			index: 38,
			type: 'Mobility',
			key: 'dodge_stamina',
			description: 'Restores Stamina when dodging through Behemoth attacks.',
			effects: [
				{
					description: 'Gain 10 Stamina after dodging through an attack',
					value: 10
				},
				{
					description: 'Gain 15 Stamina after dodging through an attack',
					value: 15
				},
				{
					description: 'Gain 20 Stamina after dodging through an attack',
					value: 20
				},
				{
					description: 'Gain 25 Stamina after dodging through an attack',
					value: 25
				},
				{
					description: 'Gain 30 Stamina after dodging through an attack',
					value: 30
				},
				{
					description: 'Gain 35 Stamina after dodging through an attack',
					value: 35
				}
			]
		},
		{
			name: 'Sprinter',
			index: 49,
			type: 'Mobility',
			key: 'Sprinter',
			description: 'Reduces max stamina. Increases movespeed and reduces sprint cost.',
			effects: [
				{
					description: '+5% movement speed and -5% reduced sprint cost',
					value: 1.05
				},
				{
					description: '+7.5% movement speed and -7.5% reduced sprint cost',
					value: 1.075
				},
				{
					description: '+10% movement speed and -10% reduced sprint cost',
					value: 1.1
				},
				{
					description: '+12.5% movement speed and -12.5% reduced sprint cost',
					value: 1.125
				},
				{
					description: '+15% movement speed and -15% reduced sprint cost',
					value: 1.15
				},
				{
					description: '+17.5% movement speed and -17.5% reduced sprint cost',
					value: 1.175
				}
			]
		},
		{
			name: 'Swift',
			index: 53,
			type: 'Mobility',
			key: 'sheathed_weapon_movement_speed',
			description: 'Increases Movement Speed when your weapon is sheathed.',
			effects: [
				{
					description: 'While sheathed, increases Movement Speed by 5%',
					value: 1.05
				},
				{
					description: 'While sheathed, increases Movement Speed by 10%',
					value: 1.1
				},
				{
					description: 'While sheathed, increases Movement Speed by 15%',
					value: 1.15
				},
				{
					description: 'While sheathed, increases Movement Speed by 20%',
					value: 1.2
				},
				{
					description: 'While sheathed, increases Movement Speed by 25%',
					value: 1.25
				},
				{
					description: 'While sheathed, increases Movement Speed by 30%, also affects other nearby Slayers.',
					value: 1.3
				}
			]
		}
	],
	[
		{
			name: 'Aetherhunter',
			index: 4,
			type: 'Power',
			key: 'damage_aether',
			description: 'Increases damage against aether charged Behemoths.',
			effects: [
				{
					description: '+5% Damage vs Aether-charged Behemoths',
					value: 1.05
				},
				{
					description: '+10% Damage vs Aether-charged Behemoths',
					value: 1.1
				},
				{
					description: '+20% Damage vs Aether-charged Behemoths',
					value: 1.2
				},
				{
					description: '+30% Damage vs Aether-charged Behemoths',
					value: 1.3
				},
				{
					description: '+40% Damage vs Aether-charged Behemoths',
					value: 1.4
				},
				{
					description: '+50% Damage vs Aether-charged Behemoths',
					value: 1.5
				}
			]
		},
		{
			name: 'Deconstruction',
			index: 18,
			type: 'Power',
			key: 'damage_object',
			description: 'Bonus damage against objects created by Behemoths.',
			effects: [
				{
					description: 'Deal 110% damage to objects created by Behemoths',
					value: 1.1
				},
				{
					description: 'Deal 120% damage to objects created by Behemoths',
					value: 1.2
				},
				{
					description: 'Deal 130% damage to objects created by Behemoths',
					value: 1.3
				},
				{
					description: 'Deal 150% damage to objects created by Behemoths',
					value: 1.5
				},
				{
					description: 'Deal 170% damage to objects created by Behemoths',
					value: 1.7
				},
				{
					description: 'Deal 200% damage to objects created by Behemoths',
					value: 2
				}
			]
		},
		{
			name: 'Discipline',
			index: 19,
			type: 'Power',
			key: [
				'CriticalStrikeChance',
				'HealthLimited'
			],
			description: 'Prevents you from having over half health. Increases critical strike chance.',
			effects: [
				{
					description: [
						'+2.5% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.025,
						null
					]
				},
				{
					description: [
						'+5.0% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.05,
						null
					]
				},
				{
					description: [
						'+7.5% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.075,
						null
					]
				},
				{
					description: [
						'+10.0% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.1,
						null
					]
				},
				{
					description: [
						'+12.5% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.25,
						null
					]
				},
				{
					description: [
						'+15% critical strike chance',
						'Health is limited to 50% of max health'
					],
					value: [
						1.15,
						null
					]
				}
			]
		},
		{
			name: 'Knockout King',
			index: 32,
			type: 'Power',
			key: [
				'stagger_damage',
				'dodge_stagger_damage'
			],
			description: 'Percent increase to Stagger damage.',
			effects: [
				{
					description: [
						'5% Stagger Damage',
						null
					],
					value: [
						0.05,
						null
					]
				},
				{
					description: [
						'10% Stagger Damage',
						null
					],
					value: [
						0.1,
						null
					]
				},
				{
					description: [
						'15% Stagger Damage',
						null
					],
					value: [
						0.15,
						null
					]
				},
				{
					description: [
						'20% Stagger Damage',
						'After dodging through an attack the next weapon attack\'s Stagger is increased by 50%'
					],
					value: [
						0.2,
						0.5
					]
				},
				{
					description: [
						'25% Stagger Damage',
						'After dodging through an attack the next weapon attack\'s Stagger is increased by 50%'
					],
					value: [
						0.25,
						0.5
					]
				},
				{
					description: [
						'30% Stagger Damage',
						'After dodging through an attack the next weapon attack\'s Stagger is increased by 100%'
					],
					value: [
						0.3,
						1
					]
				}
			]
		},
		{
			name: 'Overpower',
			index: 40,
			type: 'Power',
			key: 'damage_staggered',
			description: 'Increases damage against staggered Behemoths.',
			effects: [
				{
					description: '+10% Damage vs Staggered Behemoths',
					value: 1.1
				},
				{
					description: '+20% Damage vs Staggered Behemoths',
					value: 1.2
				},
				{
					description: '+30% Damage vs Staggered Behemoths',
					value: 1.3
				},
				{
					description: '+40% Damage vs Staggered Behemoths',
					value: 1.4
				},
				{
					description: '+50% Damage vs Staggered Behemoths',
					value: 1.5
				},
				{
					description: '+60% Damage vs Staggered Behemoths',
					value: 1.6
				}
			]
		},
		{
			name: 'Pacifier',
			index: 41,
			type: 'Power',
			key: 'stagger_enraged',
			description: 'Increases stagger damage against enraged Behemoths.',
			effects: [
				{
					description: '+10% Stagger vs Enraged Behemoths',
					value: 1.1
				},
				{
					description: '+20% Stagger vs Enraged Behemoths',
					value: 1.2
				},
				{
					description: '+30% Stagger vs Enraged Behemoths',
					value: 1.3
				},
				{
					description: '+40% Stagger vs Enraged Behemoths',
					value: 1.4
				},
				{
					description: '+50% Stagger vs Enraged Behemoths',
					value: 1.5
				},
				{
					description: '+60% Stagger vs Enraged Behemoths',
					value: 1.6
				}
			]
		},
		{
			name: 'Rage',
			index: 44,
			type: 'Power',
			key: 'Rage',
			description: 'Increases your damage when your health is low.',
			effects: [
				{
					description: 'When under 50% health, deal +5% damage',
					value: 1.05
				},
				{
					description: 'When under 50% health, deal +8% damage',
					value: 1.08
				},
				{
					description: 'When under 50% health, deal +12% damage',
					value: 1.12
				},
				{
					description: 'When under 50% health, deal +16% damage',
					value: 1.16
				},
				{
					description: 'When under 50% health, deal +20% damage',
					value: 1.2
				},
				{
					description: 'When under 50% health, deal +25% damage',
					value: 1.25
				}
			]
		},
		{
			name: 'Ragehunter',
			index: 45,
			type: 'Power',
			key: 'damage_enraged',
			description: 'Increases damage against enraged Behemoths.',
			effects: [
				{
					description: '+5% Damage vs Enraged Behemoths',
					value: 1.05
				},
				{
					description: '+10% Damage vs Enraged Behemoths',
					value: 1.1
				},
				{
					description: '+15% Damage vs Enraged Behemoths',
					value: 1.15
				},
				{
					description: '+20% Damage vs Enraged Behemoths',
					value: 1.2
				},
				{
					description: '+30% Damage vs Enraged Behemoths',
					value: 1.3
				},
				{
					description: '+40% Damage vs Enraged Behemoths',
					value: 1.4
				}
			]
		},
		{
			name: 'Sharpened',
			index: 47,
			type: 'Power',
			key: [
				'percent_part_damage',
				'dodge_percent_part_damage'
			],
			description: 'Percent increase to Part damage.',
			effects: [
				{
					description: [
						'+5% Part Damage',
						null
					],
					value: [
						1.05,
						null
					]
				},
				{
					description: [
						'+10% Part Damage',
						null
					],
					value: [
						1.1,
						null
					]
				},
				{
					description: [
						'+15% Part Damage',
						null
					],
					value: [
						1.15,
						null
					]
				},
				{
					description: [
						'+20% Part Damage',
						'After dodging through an attack the next weapon attack\'s Part Break Damage is increased by 50%'
					],
					value: [
						1.2,
						1.5
					]
				},
				{
					description: [
						'+25% Part Damage',
						'After dodging through an attack the next weapon attack\'s Part Break Damage is increased by 50%'
					],
					value: [
						1.25,
						1.5
					]
				},
				{
					description: [
						'+30% Part Damage',
						'After dodging through an attack the next weapon attack\'s Part Break Damage is increased by 100%'
					],
					value: [
						1.3,
						2
					]
				}
			]
		},
		{
			name: 'Tenacious',
			index: 54,
			type: 'Power',
			key: [
				'TenaciousDamageBonus',
				'TenaciousCritBonus'
			],
			description: 'Gain bonus damage based on current HP. At higher levels, gain bonus critical strike chance based on current shield.',
			effects: [
				{
					description: [
						'For every 100 current HP, gain 0.33% bonus damage',
						null
					],
					value: [
						0.0033,
						null
					]
				},
				{
					description: [
						'For every 100 current HP, gain 0.66% bonus damage',
						null
					],
					value: [
						0.0066,
						null
					]
				},
				{
					description: [
						'For every 100 current HP, gain 1% bonus damage',
						null
					],
					value: [
						0.01,
						null
					]
				},
				{
					description: [
						'For every 100 current HP, gain 1.33% bonus damage',
						'For every 100 Shield gain 1% bonus critical strike chance'
					],
					value: [
						0.0133,
						0.01
					]
				},
				{
					description: [
						'For every 100 current HP, gain 1.66% bonus damage',
						'For every 75 Shield gain 1% bonus critical strike chance'
					],
					value: [
						0.0166,
						0.01
					]
				},
				{
					description: [
						'For every 100 current HP, gain 2% bonus damage',
						'For every 50 Shield gain 1% bonus critical strike chance'
					],
					value: [
						0.02,
						0.01
					]
				}
			]
		}
	],
	[
		{
			name: 'Acidic',
			index: 1,
			type: 'Technique',
			key: [
				'part_to_wound_damage',
				'percent_part_damage'
			],
			description: 'Increases Wound damage at the cost of Part damage.',
			effects: [
				{
					description: [
						'Converts 30% of Part Damage to Wound Damage',
						null
					],
					value: [
						0.3,
						null
					]
				},
				{
					description: [
						'Converts 40% of Part Damage to Wound Damage',
						null
					],
					value: [
						0.4,
						null
					]
				},
				{
					description: [
						'Converts 50% of Part Damage to Wound Damage',
						null
					],
					value: [
						0.5,
						null
					]
				},
				{
					description: [
						'Converts 50% of Part Damage to Wound Damage',
						'+10% Part damage'
					],
					value: [
						0.5,
						1.1
					]
				},
				{
					description: [
						'Converts 50% of Part Damage to Wound Damage',
						'+15% Part damage'
					],
					value: [
						0.5,
						1.15
					]
				},
				{
					description: [
						'Converts 50% of Part Damage to Wound Damage',
						'+20% Part damage'
					],
					value: [
						0.5,
						1.2
					]
				}
			]
		},
		{
			name: 'Adrenaline',
			index: 2,
			type: 'Technique',
			key: 'AdrenalineDamage',
			description: 'Increases damage dealt based on stamina spent.',
			effects: [
				{
					description: 'Grants +0.5% increased damage for every 10 stamina missing.',
					value: 1.005
				},
				{
					description: 'Grants +1.0% increased damage for every 10 stamina missing.',
					value: 1.01
				},
				{
					description: 'Grants +1.5% increased damage for every 10 stamina missing.',
					value: 1.015
				},
				{
					description: 'Grants +2.0% increased damage for every 10 stamina missing.',
					value: 1.02
				},
				{
					description: 'Grants +2.5% increased damage for every 10 stamina missing.',
					value: 1.025
				},
				{
					description: 'Grants +3.0% increased damage for every 10 stamina missing.',
					value: 1.03
				}
			]
		},
		{
			name: 'Barbed',
			index: 9,
			type: 'Technique',
			key: [
				'wound_damage',
				'dodge_expose_damage'
			],
			description: 'Adds a flat amount of Wound damage on hit.',
			effects: [
				{
					description: [
						'+5 Wound Damage on Hit',
						null
					],
					value: [
						5,
						null
					]
				},
				{
					description: [
						'+10 Wound Damage on Hit',
						null
					],
					value: [
						10,
						null
					]
				},
				{
					description: [
						'+15 Wound Damage on Hit',
						null
					],
					value: [
						15,
						null
					]
				},
				{
					description: [
						'+20 Wound Damage on Hit',
						'After dodging through an attack the next attack\'s Expose Damage is increased by 200'
					],
					value: [
						20,
						200
					]
				},
				{
					description: [
						'+30 Wound Damage on Hit',
						'After dodging through an attack the next attack\'s Expose Damage is increased by 200'
					],
					value: [
						30,
						200
					]
				},
				{
					description: [
						'+40 Wound Damage on Hit',
						'After dodging through an attack the next attack\'s Expose Damage is increased by 400'
					],
					value: [
						40,
						400
					]
				}
			]
		},
		{
			name: 'Berserker',
			index: 10,
			type: 'Technique',
			key: [
				'ReducedHealth',
				'DealDamageDoDamage'
			],
			description: 'Reduces max health. Dealing damage stacks increased damage dealt for a short period.',
			effects: [
				{
					description: [
						'-50 max health',
						'After dealing damage, gain +1% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-50,
						0.01
					]
				},
				{
					description: [
						'-100 max health',
						'After dealing damage, gain +1.5% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-100,
						0.015
					]
				},
				{
					description: [
						'-150 max health',
						'After dealing damage, gain +2% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-150,
						0.02
					]
				},
				{
					description: [
						'-200 max health',
						'After dealing damage, gain +2.5% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-200,
						0.025
					]
				},
				{
					description: [
						'-250 max health',
						'After dealing damage, gain +3% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-250,
						0.03
					]
				},
				{
					description: [
						'-300 max health',
						'After dealing damage, gain +3.5% damage for 3 seconds. Stacks 10 times.'
					],
					value: [
						-300,
						0.035
					]
				}
			]
		},
		{
			name: 'Bladestorm',
			index: 11,
			type: 'Technique',
			key: [
				'flat_part_damage',
				'dodge_part_damage'
			],
			description: 'Adds a flat amount of Part damage on hit.',
			effects: [
				{
					description: [
						'+5 Part Damage on Hit',
						null
					],
					value: [
						5,
						null
					]
				},
				{
					description: [
						'+10 Part Damage on Hit',
						null
					],
					value: [
						10,
						null
					]
				},
				{
					description: [
						'+15 Part Damage on Hit',
						null
					],
					value: [
						15,
						null
					]
				},
				{
					description: [
						'+20 Part Damage on Hit',
						'+200 Part Damage after dodging through an attack'
					],
					value: [
						20,
						200
					]
				},
				{
					description: [
						'+30 Part Damage on Hit',
						'+200 Part Damage after dodging through an attack'
					],
					value: [
						30,
						200
					]
				},
				{
					description: [
						'+40 Part Damage on Hit',
						'+400 Part Damage after dodging through an attack'
					],
					value: [
						40,
						400
					]
				}
			]
		},
		{
			name: 'Cunning',
			index: 17,
			type: 'Technique',
			key: 'CriticalStrike',
			description: 'Grants a chance to deal double damage.',
			effects: [
				{
					description: '2% critical strike chance',
					value: 0.02
				},
				{
					description: '3% critical strike chance',
					value: 0.03
				},
				{
					description: '4% critical strike chance',
					value: 0.04
				},
				{
					description: '5% critical strike chance, +10% critical strike damage.',
					value: 0.05
				},
				{
					description: '7.5% critical strike chance, +20% critical strike damage.',
					value: 0.075
				},
				{
					description: '10% critical strike chance, +30% critical strike damage.',
					value: 0.1
				}
			]
		},
		{
			name: 'Evasive Fury',
			index: 24,
			type: 'Technique',
			key: 'dodge_attack_speed',
			description: 'Temporarily increases attack speed when dodging through a Behemoth\'s attack.',
			effects: [
				{
					description: '+7.5% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.075
				},
				{
					description: '+10% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.1
				},
				{
					description: '+12.5% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.125
				},
				{
					description: '+15% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.15
				},
				{
					description: '+17.5% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.175
				},
				{
					description: '+20% Attack Speed for 16 seconds after dodging through an attack',
					value: 0.2
				}
			]
		},
		{
			name: 'Merciless',
			index: 36,
			type: 'Technique',
			key: 'wound_damage',
			description: 'Increases Wound damage against staggered Behemoths.',
			effects: [
				{
					description: '+25 Wound Damage vs Staggered Behemoths',
					value: 25
				},
				{
					description: '+40 Wound Damage vs Staggered Behemoths',
					value: 40
				},
				{
					description: '+55 Wound Damage vs Staggered Behemoths',
					value: 55
				},
				{
					description: '+70 Wound Damage vs Staggered Behemoths',
					value: 70
				},
				{
					description: '+85 Wound Damage vs Staggered Behemoths',
					value: 85
				},
				{
					description: '+100 Wound Damage vs Staggered Behemoths',
					value: 100
				}
			]
		},
		{
			name: 'Molten',
			index: 37,
			type: 'Technique',
			key: 'attack_speed',
			description: 'Generates Molten Hearts when dealing damage.',
			effects: [
				{
					description: 'Dealing damage generates a Molten Heart on a 26 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				},
				{
					description: 'Dealing damage generates a Molten Heart on a 23 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				},
				{
					description: 'Dealing damage generates two Molten Hearts on a 23 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				},
				{
					description: 'Dealing damage generates two Molten Hearts on a 20 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				},
				{
					description: 'Dealing damage generates three Molten Hearts on a 20 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				},
				{
					description: 'Dealing damage generates three Molten Hearts on a 16 second cooldown, granting immunity to burning and increased attack and movement speed.',
					value: 1.1
				}
			]
		},
		{
			name: 'Predator',
			index: 43,
			type: 'Technique',
			key: 'EffectPredator',
			description: 'Increases damage after avoiding damage for a short time.',
			effects: [
				{
					description: 'Deal 4% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.04
				},
				{
					description: 'Deal 8% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.08
				},
				{
					description: 'Deal 14% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.14
				},
				{
					description: 'Deal 20% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.2
				},
				{
					description: 'Deal 27% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.27
				},
				{
					description: 'Deal 35% increased damage after not getting hit for 15 seconds. Bonus removed when hit.',
					value: 1.35
				}
			]
		},
		{
			name: 'Savagery',
			index: 46,
			type: 'Technique',
			key: 'damage_wounded',
			description: 'Increases damage against Wounded parts.',
			effects: [
				{
					description: '+20% Damage vs Wounded Parts',
					value: 1.2
				},
				{
					description: '+30% Damage vs Wounded Parts',
					value: 1.3
				},
				{
					description: '+40% Damage vs Wounded Parts',
					value: 14
				},
				{
					description: '+60% Damage vs Wounded Parts',
					value: 1.6
				},
				{
					description: '+80% Damage vs Wounded Parts',
					value: 1.8
				},
				{
					description: '+100% Damage vs Wounded Parts',
					value: 2
				}
			]
		},
		{
			name: 'Weighted Strikes',
			index: 58,
			type: 'Technique',
			key: [
				'stagger_damage',
				'dpdge_stagger_damage',
				'revive_shield'
			],
			description: 'Adds a flat amount of Stagger damage on hit. At later ranks, allows more weapon attacks to interrupt.',
			effects: [
				{
					description: [
						'+5 Stagger Damage on Hit',
						null,
						null
					],
					value: [
						5,
						null,
						null
					]
				},
				{
					description: [
						'+10 Stagger Damage on Hit',
						null,
						null
					],
					value: [
						10,
						null,
						null
					]
				},
				{
					description: [
						'+15 Stagger Damage on Hit',
						null,
						null
					],
					value: [
						15,
						null,
						null
					]
				},
				{
					description: [
						'+20 Stagger Damage on Hit',
						'+200 Stagger after dodging through an attack',
						null
					],
					value: [
						20,
						200,
						null
					]
				},
				{
					description: [
						'+30 Stagger Damage on Hit',
						'+200 Stagger after dodging through an attack',
						null
					],
					value: [
						30,
						200,
						null
					]
				},
				{
					description: [
						'+40 Stagger Damage on Hit',
						'+400 Stagger after dodging through an attack',
						'Ranged swings and missiles interrupt unstable Behemoth attacks'
					],
					value: [
						40,
						400,
						null
					]
				}
			]
		},
		{
			name: 'Wild Frenzy',
			index: 59,
			type: 'Technique',
			key: 'low_hp_attack_speed',
			description: 'Increases Attack Speed when at low health.',
			effects: [
				{
					description: 'When under 50% health, increase attack speed by 7.5%',
					value: 1.075
				},
				{
					description: 'When under 50% health, increase attack speed by 10%',
					value: 1.1
				},
				{
					description: 'When under 50% health, increase attack speed by 12.5%',
					value: 1.125
				},
				{
					description: 'When under 50% health, increase attack speed by 15%',
					value: 1.15
				},
				{
					description: 'When under 50% health, increase attack speed by 17.5%',
					value: 1.175
				},
				{
					description: 'When under 50% health, increase attack speed by 20%',
					value: 1.2
				}
			]
		}
	],
	[
		{
			name: 'Aetherborne',
			index: 3,
			type: 'Utility',
			key: [
				'aether_vent_not_used',
				'aether_vent_bonus_heal'
			],
			description: 'Increases the benefits of using aether vents.',
			effects: [
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'25 additional Aether Vent healing'
					],
					value: [
						0.25,
						25
					]
				},
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'50 additional Aether Vent healing'
					],
					value: [
						0.25,
						50
					]
				},
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'75 additional Aether Vent healing'
					],
					value: [
						0.25,
						75
					]
				},
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'100 additional Aether Vent healing'
					],
					value: [
						0.25,
						100
					]
				},
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'150 additional Aether Vent healing'
					],
					value: [
						0.25,
						150
					]
				},
				{
					description: [
						'25% chance not to consume an Aether Vent charge on use',
						'200 additional Aether Vent healing'
					],
					value: [
						0.25,
						200
					]
				}
			]
		},
		{
			name: 'Aetheric Attunement',
			index: 5,
			type: 'Utility',
			key: 'percent_lantern_charge',
			description: 'Percent increase to Lantern Charge gained from attacks.',
			effects: [
				{
					description: '+10% Lantern Charge',
					value: 1.1
				},
				{
					description: '+15% Lantern Charge',
					value: 1.15
				},
				{
					description: '+20% Lantern Charge',
					value: 1.2
				},
				{
					description: '+30% Lantern Charge',
					value: 1.3
				},
				{
					description: '+40% Lantern Charge',
					value: 1.4
				},
				{
					description: '+50% Lantern Charge',
					value: 1.5
				}
			]
		},
		{
			name: 'Aetheric Frenzy',
			index: 6,
			type: 'Utility',
			key: 'flat_lantern_charge',
			description: 'Gains a flat amount of Lantern Charge on each weapon hit.',
			effects: [
				{
					description: '+3 Lantern Charge on Hit',
					value: 3
				},
				{
					description: '+4 Lantern Charge on Hit',
					value: 4
				},
				{
					description: '+5 Lantern Charge on Hit',
					value: 5
				},
				{
					description: '+7.5 Lantern Charge on Hit',
					value: 7.5
				},
				{
					description: '+10 Lantern Charge on Hit',
					value: 10
				},
				{
					description: '+12.5 Lantern Charge on Hit',
					value: 12.5
				}
			]
		},
		{
			name: 'Cascade',
			index: 13,
			type: 'Utility',
			key: 'LanternHoldRandomEffect',
			description: 'On Lantern Hold, generate random effect.',
			effects: [
				{
					description: 'On Lantern Hold, randomly generate 1 of the following Boosts: Healing, Stamina, Power.',
					value: null
				},
				{
					description: 'On Lantern Hold, randomly generate 2 of the following Boosts: Healing, Stamina, Power.',
					value: null
				},
				{
					description: 'On Lantern Hold, randomly generate 3 of the following Boosts: Healing, Stamina, Power.',
					value: null
				},
				{
					description: 'On Lantern Hold, randomly generate 4 of the following Boosts: Healing, Stamina, Power. Stamina Boost duration increased.',
					value: null
				},
				{
					description: 'On Lantern Hold, randomly generate 4 of the following Boosts: Healing, Stamina, Power. Healing Boost also grants shields.',
					value: null
				},
				{
					description: 'On Lantern Hold, randomly generate 4 of the following Boosts: Healing, Stamina, Power. Power Boost duration increased. Chance to generate Invincibility Boost.',
					value: null
				}
			]
		},
		{
			name: 'Catalyst',
			index: 14,
			type: 'Utility',
			key: [
				'TonicEffectiveness',
				'TonicDuration'
			],
			description: 'Increases effectiveness of Tonics. At later ranks, increases duration as well.',
			effects: [
				{
					description: [
						'+10% Tonic Effectiveness',
						null
					],
					value: [
						1.1,
						null
					]
				},
				{
					description: [
						'+20% Tonic Effectiveness',
						null
					],
					value: [
						1.2,
						null
					]
				},
				{
					description: [
						'+30% Tonic Effectiveness',
						null
					],
					value: [
						1.3,
						null
					]
				},
				{
					description: [
						'+40% Tonic Effectiveness',
						'+20% Tonic Duration'
					],
					value: [
						1.4,
						1.2
					]
				},
				{
					description: [
						'+50% Tonic Effectiveness',
						'+40% Tonic Duration'
					],
					value: [
						1.5,
						1.4
					]
				},
				{
					description: [
						'+60% Tonic Effectiveness',
						'+60% Tonic Duration'
					],
					value: [
						1.6,
						1.6
					]
				}
			]
		},
		{
			name: 'Conduit',
			index: 16,
			type: 'Utility',
			key: 'attack_speed_all_slayers',
			description: 'Using a Lantern\'s hold ability increases all Slayers\' attack speed temporarily.',
			effects: [
				{
					description: 'Using your lantern hold ability grants 4% attack speed to all Slayers for 10 seconds.',
					value: 1.04
				},
				{
					description: 'Using your lantern hold ability grants 6% attack speed to all Slayers for 10 seconds.',
					value: 1.06
				},
				{
					description: 'Using your lantern hold ability grants 8% attack speed to all Slayers for 10 seconds.',
					value: 1.08
				},
				{
					description: 'Using your lantern hold ability grants 10% attack speed to all Slayers for 10 seconds.',
					value: 1.1
				},
				{
					description: 'Using your lantern hold ability grants 12.5% attack speed to all Slayers for 10 seconds.',
					value: 1.125
				},
				{
					description: 'Using your lantern hold ability grants 15% attack speed to all Slayers for 10 seconds.',
					value: 1.15
				}
			]
		},
		{
			name: 'Energized',
			index: 21,
			type: 'Utility',
			key: 'weapon_charge_rate',
			description: 'Increase weapon meter gain rate.',
			effects: [
				{
					description: '+10% Weapon Charge rate',
					value: 0.1
				},
				{
					description: '+15% Weapon Charge rate',
					value: 0.15
				},
				{
					description: '+20% Weapon Charge rate',
					value: 0.2
				},
				{
					description: '+25% Weapon Charge rate',
					value: 0.25
				},
				{
					description: '+30% Weapon Charge rate',
					value: 0.3
				},
				{
					description: '+40% Weapon Charge rate',
					value: 0.4
				}
			]
		},
		{
			name: 'Engineer',
			index: 22,
			type: 'Utility',
			key: 'IncreasedPylonRange',
			description: 'Reduces healing from Slayer flask. Increases range of pylons.',
			effects: [
				{
					description: '+35% increase Pylon range',
					value: 0.35
				},
				{
					description: '+50% increase Pylon range',
					value: 0.5
				},
				{
					description: '+65% increase Pylon range',
					value: 0.65
				},
				{
					description: '+80% increase Pylon range',
					value: 0.8
				},
				{
					description: '+115% increase Pylon range',
					value: 1.15
				},
				{
					description: '+150% increase Pylon range',
					value: 1.5
				}
			]
		},
		{
			name: 'Lucent',
			index: 33,
			type: 'Utility',
			key: [
				'increased_healing',
				'flat_lantern_charge'
			],
			description: 'Flask heals over time and generates lantern charge.',
			effects: [
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 8 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						8
					]
				},
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 16 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						16
					]
				},
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 25 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						25
					]
				},
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 37.5 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						37.5
					]
				},
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 50 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						50
					]
				},
				{
					description: [
						'Your Flask heals over 20 seconds',
						'but for 20% increased healing. While this heal is active',
						'generate 75 Lantern Charge each second.',
						null
					],
					value: [
						1.2,
						75
					]
				}
			]
		},
		{
			name: 'Medic',
			index: 34,
			type: 'Utility',
			key: [
				'revive_heal',
				'revive_speed',
				'revive_shield'
			],
			description: 'Improves your ability to revive allies.',
			effects: [
				{
					description: [
						'When reviving an ally they are healed an additional 5%',
						null,
						null
					],
					value: [
						1.05,
						null,
						null
					]
				},
				{
					description: [
						'When reviving an ally they are healed an additional 10%',
						null,
						null
					],
					value: [
						1.1,
						null,
						null
					]
				},
				{
					description: [
						'When reviving an ally they are healed an additional 20%',
						null,
						null
					],
					value: [
						1.2,
						null,
						null
					]
				},
				{
					description: [
						'When reviving an ally they are healed an additional 20%',
						'Increases Revive Speed by 66%',
						null
					],
					value: [
						1.2,
						0.66,
						null
					]
				},
				{
					description: [
						'When reviving an ally they are healed an additional 30%',
						'Increases Revive Speed by 66%',
						null
					],
					value: [
						1.3,
						0.66,
						null
					]
				},
				{
					description: [
						'When reviving an ally they are healed an additional 40%',
						'Increases Revive Speed by 66%',
						'Grants a 300 health shield for 20 seconds after reviving an ally'
					],
					value: [
						1.4,
						0.66,
						300
					]
				}
			]
		},
		{
			name: 'Mender',
			index: 35,
			type: 'Utility',
			key: 'HealGroup',
			description: 'Reduces healing from Slayer Flask. Using your flask restores other Slayers\' health.',
			effects: [
				{
					description: 'Using your Flask also heals all other Slayers for 45',
					value: 45
				},
				{
					description: 'Using your Flask also heals all other Slayers for 90',
					value: 90
				},
				{
					description: 'Using your Flask also heals all other Slayers for 135',
					value: 135
				},
				{
					description: 'Using your Flask also heals all other Slayers for 180',
					value: 180
				},
				{
					description: 'Using your Flask also heals all other Slayers for 225',
					value: 225
				},
				{
					description: 'Using your Flask also heals all other Slayers for 270',
					value: 270
				}
			]
		},
		{
			name: 'Stunning Vigour',
			index: 51,
			type: 'Utility',
			key: 'stagger_heal',
			description: 'Restores some health whenever a Behemoth is staggered.',
			effects: [
				{
					description: 'Heal for 50 whenever a Behemoth is Staggered',
					value: 50
				},
				{
					description: 'Heal for 75 whenever a Behemoth is Staggered',
					value: 75
				},
				{
					description: 'Heal for 100 whenever a Behemoth is Staggered',
					value: 100
				},
				{
					description: 'Heal for 125 whenever a Behemoth is Staggered',
					value: 125
				},
				{
					description: 'Heal for 150 whenever a Behemoth is Staggered',
					value: 150
				},
				{
					description: 'Heal for 200 whenever a Behemoth is Staggered',
					value: 200
				}
			]
		},
		{
			name: 'Vampiric',
			index: 56,
			type: 'Utility',
			key: 'wounded_heal',
			description: 'Restores some health whenever a Behemoth part is Wounded.',
			effects: [
				{
					description: 'Heal for 50 whenever a Behemoth is Wounded',
					value: 50
				},
				{
					description: 'Heal for 75 whenever a Behemoth is Wounded',
					value: 75
				},
				{
					description: 'Heal for 100 whenever a Behemoth is Wounded',
					value: 100
				},
				{
					description: 'Heal for 125 whenever a Behemoth is Wounded',
					value: 125
				},
				{
					description: 'Heal for 150 whenever a Behemoth is Wounded',
					value: 150
				},
				{
					description: 'Heal for 200 whenever a Behemoth is Wounded',
					value: 200
				}
			]
		},
		{
			name: 'Zeal',
			index: 60,
			type: 'Utility',
			key: 'LanternTapEffectiveness',
			description: 'Increases Lantern tap ability effectiveness.',
			effects: [
				{
					description: '+15% Lantern tap ability effectiveness',
					value: 1.15
				},
				{
					description: '+25% Lantern tap ability effectiveness',
					value: 1.25
				},
				{
					description: '+35% Lantern tap ability effectiveness',
					value: 1.35
				},
				{
					description: '+45% Lantern tap ability effectiveness',
					value: 1.45
				},
				{
					description: '+55% Lantern tap ability effectiveness',
					value: 1.55
				},
				{
					description: '+65% Lantern tap ability effectiveness',
					value: 1.65
				}
			]
		}
	],
	[]
];

const head = [
	{
		name: 'Agaric Canopy',
		icon: '/assets/icons/armours/agarus/AgaricCanopy.png',
		index: 3,
		type: 'Head',
		description: 'Head protection forged from Agarus trophies.',
		cell: 'Defence',
		perk: {
			name: 'Parasitic',
			type: 'Defence'
		},
		id: 'Agarus'
	},
	{
		name: 'Boreal Epiphany',
		icon: '/assets/icons/armours/boreus/BorealEpiphany.png',
		index: 5,
		type: 'Head',
		description: 'Head protection forged from Boreus trophies.',
		cell: 'Utility',
		perk: {
			name: 'Conditioning',
			type: 'Mobility'
		},
		id: 'Boreus'
	},
	{
		name: 'The Skullforge',
		icon: '/assets/icons/armours/charrogg/TheSkullforge.png',
		index: 9,
		type: 'Head',
		description: 'The Skullforge is a piece of craftable Exotic armour in Dauntless. It is crafted from Firebrand Charrogg reagents.',
		cell: 'Defence',
		perk: {
			name: 'None',
			type: 'None'
		},
		id: 'Charrogg Exotic'
	},
	{
		name: 'Volcanic Helm',
		icon: '/assets/icons/armours/charrogg/VolcanicHelm.png',
		index: 12,
		type: 'Head',
		description: 'Head protection forged from Charrogg trophies.',
		cell: 'Defence',
		perk: {
			name: 'Sturdy',
			type: 'Defence'
		},
		id: 'Charrogg'
	},
	{
		name: 'Draskscale Helmet',
		icon: '/assets/icons/armours/drask/DraskscaleHelmet.png',
		index: 16,
		type: 'Head',
		description: 'Head protection forged from Drask trophies.',
		cell: 'Power',
		perk: {
			name: 'Aetheric Attunement',
			type: 'Utility'
		},
		id: 'Drask'
	},
	{
		name: 'Fiery Helm',
		icon: '/assets/icons/armours/embermane/FieryHelm.png',
		index: 21,
		type: 'Head',
		description: 'Head protection forged from Embermane trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Evasive Fury',
			type: 'Technique'
		},
		id: 'Embermane'
	},
	{
		name: 'Recruit\'s Mask',
		icon: '/assets/icons/armours/generic/RecruitsMask.png',
		index: 25,
		type: 'Head',
		description: 'Light face protection for the novice Slayer.',
		cell: 'None',
		perk: {
			name: 'None',
			type: 'None'
		},
		id: 'Generic'
	},
	{
		name: 'Gnasher Cap',
		icon: '/assets/icons/armours/gnasher/GnasherCap.png',
		index: 26,
		type: 'Head',
		description: 'Head protection forged from Gnasher trophies.',
		cell: 'Defence',
		perk: {
			name: 'Tenacious',
			type: 'Power'
		},
		id: 'Gnasher'
	},
	{
		name: 'Hellplate Casque',
		icon: '/assets/icons/armours/hellion/HellplateCasque.png',
		index: 31,
		type: 'Head',
		description: 'Head protection forged from Hellion trophies.',
		cell: 'Technique',
		perk: {
			name: 'Ragehunter',
			type: 'Power'
		},
		id: 'Hellion'
	},
	{
		name: 'Eye of the Swarm',
		icon: '/assets/icons/armours/kharabak/EyeOfTheSwarm.png',
		index: 36,
		type: 'Head',
		description: 'Head protection forged from Kharabak trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Wild Frenzy',
			type: 'Technique'
		},
		id: 'Kharabak'
	},
	{
		name: 'Visage of Thorns',
		icon: '/assets/icons/armours/koshai/VisageOfThorns.png',
		index: 41,
		type: 'Head',
		description: 'Head protection forged from Koshai trophies.',
		cell: 'Technique',
		perk: {
			name: 'Agility',
			type: 'Mobility'
		},
		id: 'Koshai'
	},
	{
		name: 'Malkarion\'s Sight',
		icon: '/assets/icons/armours/malkarion/MalkarionsSight.png',
		index: 44,
		type: 'Head',
		description: 'Head protection forged from Malkarion trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Grace',
			type: 'Mobility'
		},
		id: 'Malkarion'
	},
	{
		name: 'Shocking Gaze',
		icon: '/assets/icons/armours/nayzaga/ShockingGaze.png',
		index: 46,
		type: 'Head',
		description: 'Head protection forged from Nayzaga trophies.',
		cell: 'Utility',
		perk: {
			name: 'Medic',
			type: 'Utility'
		},
		id: 'Nayzaga'
	},
	{
		name: 'Brow of Ice',
		icon: '/assets/icons/armours/pangar/BrowOfIce.png',
		index: 51,
		type: 'Head',
		description: 'Head protection forged from Pangar trophies.',
		cell: 'Power',
		perk: {
			name: 'Knockout King',
			type: 'Power'
		},
		id: 'Pangar'
	},
	{
		name: 'Quillspike Mask',
		icon: '/assets/icons/armours/quillshot/QuillspikeMask.png',
		index: 57,
		type: 'Head',
		description: 'Head protection forged from Quillshot trophies.',
		cell: 'Defence',
		perk: {
			name: 'Savagery',
			type: 'Technique'
		},
		id: 'Quillshot'
	},
	{
		name: 'Light\'s Crown',
		icon: '/assets/icons/armours/rezakiri/LightsCrown.png',
		index: 58,
		type: 'Head',
		description: 'Head protection forged from Rezakiri trophies.',
		cell: 'Technique',
		perk: {
			name: 'Conduit',
			type: 'Utility'
		},
		id: 'Rezakiri'
	},
	{
		name: 'Prismatic Grace',
		icon: '/assets/icons/armours/rezakiri/PrismaticGrace.png',
		index: 62,
		type: 'Head',
		description: 'Prismatic Grace is a piece of craftable Exotic armour in Dauntless. It is crafted from Rezakiri reagents.',
		cell: 'Technique',
		perk: {
			name: 'None',
			type: 'None'
		},
		id: 'Rezakiri Exotic'
	},
	{
		name: 'Guise of the Rift',
		icon: '/assets/icons/armours/riftstalker/GuiseOfTheRift.png',
		index: 63,
		type: 'Head',
		description: 'Head protection forged from Riftstalker trophies.',
		cell: 'Utility',
		perk: {
			name: 'Aetheric Attunement',
			type: 'Utility'
		},
		id: 'Riftstalker'
	},
	{
		name: 'Shrikedown Helm',
		icon: '/assets/icons/armours/shrike/ShrikedownHelm.png',
		index: 69,
		type: 'Head',
		description: 'Head protection forged from Shrike trophies.',
		cell: 'Technique',
		perk: {
			name: 'Evasion',
			type: 'Mobility'
		},
		id: 'Shrike'
	},
	{
		name: 'Dark Watch',
		icon: '/assets/icons/armours/shrowd/DarkWatch.png',
		index: 74,
		type: 'Head',
		description: 'Head protection forged from Shrowd trophies.',
		cell: 'Power',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		id: 'Shrowd'
	},
	{
		name: 'Tragic Echo',
		icon: '/assets/icons/armours/shrowd/TragicEcho.png',
		index: 75,
		type: 'Head',
		description: 'Tragic Echo is a piece of craftable Exotic armour in Dauntless. It is crafted from Shrowd reagents.',
		cell: 'Power',
		perk: {
			name: 'None',
			type: 'None'
		},
		id: 'Shrowd Exotic'
	},
	{
		name: 'Sight of Stone',
		icon: '/assets/icons/armours/skarn/SightOfStone.png',
		index: 79,
		type: 'Head',
		description: 'Head protection forged from Skarn trophies.',
		cell: 'Defence',
		perk: {
			name: 'Tough',
			type: 'Defence'
		},
		id: 'Skarn'
	},
	{
		name: 'Skraevwing Helmet',
		icon: '/assets/icons/armours/skraev/SkraevwingHelmet.png',
		index: 82,
		type: 'Head',
		description: 'Head protection forged from Skraev trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Fleet Footed',
			type: 'Mobility'
		},
		id: 'Skraev'
	},
	{
		name: 'Lightning Helm',
		icon: '/assets/icons/armours/stormclaw/LightningHelm.png',
		index: 86,
		type: 'Head',
		description: 'Head protection forged from Stormclaw trophies.',
		cell: 'Technique',
		perk: {
			name: 'Energized',
			type: 'Utility'
		},
		id: 'Stormclaw'
	},
	{
		name: 'Thrax\'s Scream',
		icon: '/assets/icons/armours/thrax/ThraxsScream.png',
		index: 90,
		type: 'Head',
		description: 'Head protection forged from Thrax trophies.',
		cell: 'Utility',
		perk: {
			name: 'Catalyst',
			type: 'Utility'
		},
		id: 'Thrax'
	},
	{
		name: 'Torgadoro\'s Apex',
		icon: '/assets/icons/armours/torgadoro/TorgadorosApex.png',
		index: 92,
		type: 'Head',
		description: 'Head protection forged from Torgadoro trophies.',
		cell: 'Utility',
		perk: {
			name: 'Zeal',
			type: 'Utility'
		},
		id: 'Torgadoro'
	},
	{
		name: 'Adversary\'s Guile',
		icon: '/assets/icons/armours/urska/AdversarysGuile.png',
		index: 97,
		type: 'Head',
		description: 'Head protection forged from Urska trophies.',
		cell: 'Utility',
		perk: {
			name: 'Cascade',
			type: 'Utility'
		},
		id: 'Urska'
	},
	{
		name: 'Crest of Valour',
		icon: '/assets/icons/armours/valomyr/CrestOfValour.png',
		index: 101,
		type: 'Head',
		description: 'Head protection forged from Valomyr trophies.',
		cell: 'Power',
		perk: {
			name: 'Lucent',
			type: 'Utility'
		},
		id: 'Valomyr'
	}
];

const torso = [
	{
		name: 'Agaric Bole',
		icon: '/assets/icons/armours/agarus/AgaricBole.png',
		index: 1,
		type: 'Torso',
		description: 'Torso protection forged from Agarus trophies.',
		cell: 'Utility',
		perk: {
			name: 'Parasitic',
			type: 'Defence'
		},
		id: 'Agarus'
	},
	{
		name: 'Boreal Resolve',
		icon: '/assets/icons/armours/boreus/BorealResolve.png',
		index: 8,
		type: 'Torso',
		description: 'Torso protection forged from Boreus trophies.',
		cell: 'Defence',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		id: 'Boreus'
	},
	{
		name: 'Volcanic Aegis',
		icon: '/assets/icons/armours/charrogg/VolcanicAegis.png',
		index: 10,
		type: 'Torso',
		description: 'Torso protection forged from Charrogg trophies.',
		cell: 'Utility',
		perk: {
			name: 'Aetherhunter',
			type: 'Power'
		},
		id: 'Charrogg'
	},
	{
		name: 'Draskscale Plate',
		icon: '/assets/icons/armours/drask/DraskscalePlate.png',
		index: 17,
		type: 'Torso',
		description: 'Torso protection forged from Drask trophies.',
		cell: 'Power',
		perk: {
			name: 'Aetheric Attunement',
			type: 'Utility'
		},
		id: 'Drask'
	},
	{
		name: 'Fiery Breastplate',
		icon: '/assets/icons/armours/embermane/FieryBreastplate.png',
		index: 18,
		type: 'Torso',
		description: 'Torso protection forged from Embermane trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Evasive Fury',
			type: 'Technique'
		},
		id: 'Embermane'
	},
	{
		name: 'Recruit\'s Breastplate',
		icon: '/assets/icons/armours/generic/RecruitsBreastplate.png',
		index: 22,
		type: 'Torso',
		description: 'Torso protection for the novice Slayer.',
		cell: 'None',
		perk: {
			name: 'None',
			type: 'None'
		},
		id: 'Generic'
	},
	{
		name: 'Gnasher Cloak',
		icon: '/assets/icons/armours/gnasher/GnasherCloak.png',
		index: 27,
		type: 'Torso',
		description: 'Torso protection forged from Gnasher trophies.',
		cell: 'Defence',
		perk: {
			name: 'Tough',
			type: 'Defence'
		},
		id: 'Gnasher'
	},
	{
		name: 'Hellplate Cuirass',
		icon: '/assets/icons/armours/hellion/HellplateCuirass.png',
		index: 32,
		type: 'Torso',
		description: 'Torso protection forged from Hellion trophies.',
		cell: 'Technique',
		perk: {
			name: 'Molten',
			type: 'Technique'
		},
		id: 'Hellion'
	},
	{
		name: 'Shell of the Swarm',
		icon: '/assets/icons/armours/kharabak/ShellOfTheSwarm.png',
		index: 37,
		type: 'Torso',
		description: 'Torso protection forged from Kharabak trophies.',
		cell: 'Technique',
		perk: {
			name: 'Bladestorm',
			type: 'Technique'
		},
		id: 'Kharabak'
	},
	{
		name: 'Mantle of Thorns',
		icon: '/assets/icons/armours/koshai/MantleOfThorns.png',
		index: 39,
		type: 'Torso',
		description: 'Torso protection forged from Koshai trophies.',
		cell: 'Utility',
		perk: {
			name: 'Predator',
			type: 'Technique'
		},
		id: 'Koshai'
	},
	{
		name: 'Malkarion\'s Soul',
		icon: '/assets/icons/armours/malkarion/MalkarionsSoul.png',
		index: 45,
		type: 'Torso',
		description: 'Torso protection forged from Malkarion trophies.',
		cell: 'Technique',
		perk: {
			name: 'Aetherhunter',
			type: 'Power'
		},
		id: 'Malkarion'
	},
	{
		name: 'Shocking Heart',
		icon: '/assets/icons/armours/nayzaga/ShockingHeart.png',
		index: 48,
		type: 'Torso',
		description: 'Torso protection forged from Nayzaga trophies.',
		cell: 'Defence',
		perk: {
			name: 'Medic',
			type: 'Utility'
		},
		id: 'Nayzaga'
	},
	{
		name: 'Core of Ice',
		icon: '/assets/icons/armours/pangar/CoreOfIce.png',
		index: 52,
		type: 'Torso',
		description: 'Torso protection forged from Pangar trophies.',
		cell: 'Power',
		perk: {
			name: 'Fortress',
			type: 'Defence'
		},
		id: 'Pangar'
	},
	{
		name: 'Quillspike Jacket',
		icon: '/assets/icons/armours/quillshot/QuillspikeJacket.png',
		index: 56,
		type: 'Torso',
		description: 'Torso protection forged from Quillshot trophies.',
		cell: 'Technique',
		perk: {
			name: 'Savagery',
			type: 'Technique'
		},
		id: 'Quillshot'
	},
	{
		name: 'Light\'s Virtue',
		icon: '/assets/icons/armours/rezakiri/LightsVirtue.png',
		index: 60,
		type: 'Torso',
		description: 'Torso protection forged from Rezakiri trophies.',
		cell: 'Utility',
		perk: {
			name: 'Cunning',
			type: 'Technique'
		},
		id: 'Rezakiri'
	},
	{
		name: 'Mantle of the Rift',
		icon: '/assets/icons/armours/riftstalker/MantleOfTheRift.png',
		index: 65,
		type: 'Torso',
		description: 'Torso protection forged from Riftstalker trophies.',
		cell: 'Utility',
		perk: {
			name: 'Conduit',
			type: 'Utility'
		},
		id: 'Riftstalker'
	},
	{
		name: 'Shrikedown Plate',
		icon: '/assets/icons/armours/shrike/ShrikedownPlate.png',
		index: 70,
		type: 'Torso',
		description: 'Torso protection forged from Shrike trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Evasion',
			type: 'Mobility'
		},
		id: 'Shrike'
	},
	{
		name: 'Dark Marrow',
		icon: '/assets/icons/armours/shrowd/DarkMarrow.png',
		index: 72,
		type: 'Torso',
		description: 'Torso protection forged from Shrowd trophies.',
		cell: 'Power',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		id: 'Shrowd'
	},
	{
		name: 'Heart of Stone',
		icon: '/assets/icons/armours/skarn/HeartOfStone.png',
		index: 76,
		type: 'Torso',
		description: 'Torso protection forged from Skarn trophies.',
		cell: 'Defence',
		perk: {
			name: 'Guardian',
			type: 'Defence'
		},
		id: 'Skarn'
	},
	{
		name: 'Skraevwing Jacket',
		icon: '/assets/icons/armours/skraev/SkraevwingJacket.png',
		index: 83,
		type: 'Torso',
		description: 'Torso protection forged from Skraev trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Adrenaline',
			type: 'Technique'
		},
		id: 'Skraev'
	},
	{
		name: 'Lightning Plate',
		icon: '/assets/icons/armours/stormclaw/LightningPlate.png',
		index: 87,
		type: 'Torso',
		description: 'Torso protection forged from Stormclaw trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Energized',
			type: 'Utility'
		},
		id: 'Stormclaw'
	},
	{
		name: 'Thrax\'s Shadow',
		icon: '/assets/icons/armours/thrax/ThraxsShadow.png',
		index: 91,
		type: 'Torso',
		description: 'Torso protection forged from Thrax trophies.',
		cell: 'Technique',
		perk: {
			name: 'Cunning',
			type: 'Technique'
		},
		id: 'Thrax'
	},
	{
		name: 'Torgadoro\'s Core',
		icon: '/assets/icons/armours/torgadoro/TorgadorosCore.png',
		index: 94,
		type: 'Torso',
		description: 'Torso protection forged from Torgadoro trophies.',
		cell: 'Power',
		perk: {
			name: 'Knockout King',
			type: 'Power'
		},
		id: 'Torgadoro'
	},
	{
		name: 'Adversary\'s Pride',
		icon: '/assets/icons/armours/urska/AdversarysPride.png',
		index: 98,
		type: 'Torso',
		description: 'Torso protection forged from Urska trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Cascade',
			type: 'Utility'
		},
		id: 'Urska'
	},
	{
		name: 'Aegis of Valour',
		icon: '/assets/icons/armours/valomyr/AegisOfValour.png',
		index: 100,
		type: 'Torso',
		description: 'Torso protection forged from Valomyr trophies.',
		cell: 'Power',
		perk: {
			name: 'Nine Lives',
			type: 'Defence'
		},
		id: 'Valomyr'
	}
];

const arms = [
	{
		name: 'Agaric Branches',
		icon: '/assets/icons/armours/agarus/AgaricBranches.png',
		index: 2,
		type: 'Arms',
		description: 'Arms protection forged from Agarus trophies.',
		cell: 'Defence',
		perk: {
			name: 'Sturdy',
			type: 'Defence'
		},
		id: 'Agarus'
	},
	{
		name: 'Boreal Might',
		icon: '/assets/icons/armours/boreus/BorealMight.png',
		index: 7,
		type: 'Arms',
		description: 'Arms protection forged from Boreus trophies.',
		cell: 'Power',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		id: 'Boreus'
	},
	{
		name: 'Volcanic Grips',
		icon: '/assets/icons/armours/charrogg/VolcanicGrips.png',
		index: 11,
		type: 'Arms',
		description: 'Arms protection forged from Charrogg trophies.',
		cell: 'Utility',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		id: 'Charrogg'
	},
	{
		name: 'Draskscale Gauntlets',
		icon: '/assets/icons/armours/drask/DraskscaleGauntlets.png',
		index: 14,
		type: 'Arms',
		description: 'Arms protection forged from Drask trophies.',
		cell: 'Utility',
		perk: {
			name: 'Sharpened',
			type: 'Power'
		},
		id: 'Drask'
	},
	{
		name: 'Fiery Gauntlets',
		icon: '/assets/icons/armours/embermane/FieryGauntlets.png',
		index: 19,
		type: 'Arms',
		description: 'Arms protection forged from Embermane trophies.',
		cell: 'Technique',
		perk: {
			name: 'Endurance',
			type: 'Mobility'
		},
		id: 'Embermane'
	},
	{
		name: 'Recruit\'s Gloves',
		icon: '/assets/icons/armours/generic/RecruitsGloves.png',
		index: 23,
		type: 'Arms',
		description: 'Arm and hand protection for the novice Slayer.',
		cell: 'None',
		perk: {
			name: 'None',
			type: 'None'
		},
		id: 'Generic'
	},
	{
		name: 'Gnasher Grips',
		icon: '/assets/icons/armours/gnasher/GnasherGrips.png',
		index: 28,
		type: 'Arms',
		description: 'Arms protection forged from Gnasher trophies.',
		cell: 'Power',
		perk: {
			name: 'Ragehunter',
			type: 'Power'
		},
		id: 'Gnasher'
	},
	{
		name: 'Hellplate Bracers',
		icon: '/assets/icons/armours/hellion/HellplateBracers.png',
		index: 30,
		type: 'Arms',
		description: 'Arms protection forged from Hellion trophies.',
		cell: 'Power',
		perk: {
			name: 'Molten',
			type: 'Technique'
		},
		id: 'Hellion'
	},
	{
		name: 'Clutches of the Swarm',
		icon: '/assets/icons/armours/kharabak/ClutchesOfTheSwarm.png',
		index: 34,
		type: 'Arms',
		description: 'Arms protection forged from Kharabak trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Conditioning',
			type: 'Mobility'
		},
		id: 'Kharabak'
	},
	{
		name: 'Grasp of Thorns',
		icon: '/assets/icons/armours/koshai/GraspOfThorns.png',
		index: 38,
		type: 'Arms',
		description: 'Arms protection forged from Koshai trophies.',
		cell: 'Power',
		perk: {
			name: 'Evasive Fury',
			type: 'Technique'
		},
		id: 'Koshai'
	},
	{
		name: 'Malkarion\'s Grasp',
		icon: '/assets/icons/armours/malkarion/MalkarionsGrasp.png',
		index: 42,
		type: 'Arms',
		description: 'Arms protection forged from Malkarion trophies.',
		cell: 'Technique',
		perk: {
			name: 'Predator',
			type: 'Technique'
		},
		id: 'Malkarion'
	},
	{
		name: 'Shocking Grasp',
		icon: '/assets/icons/armours/nayzaga/ShockingGrasp.png',
		index: 47,
		type: 'Arms',
		description: 'Arms protection forged from Nayzaga trophies.',
		cell: 'Utility',
		perk: {
			name: 'Aetheric Attunement',
			type: 'Utility'
		},
		id: 'Nayzaga'
	},
	{
		name: 'Arms of Ice',
		icon: '/assets/icons/armours/pangar/ArmsOfIce.png',
		index: 50,
		type: 'Arms',
		description: 'Arms protection forged from Pangar trophies.',
		cell: 'Defence',
		perk: {
			name: 'Knockout King',
			type: 'Power'
		},
		id: 'Pangar'
	},
	{
		name: 'Quillspike Grips',
		icon: '/assets/icons/armours/quillshot/QuillspikeGrips.png',
		index: 55,
		type: 'Arms',
		description: 'Arms protection forged from Quillshot trophies.',
		cell: 'Technique',
		perk: {
			name: 'Barbed',
			type: 'Technique'
		},
		id: 'Quillshot'
	},
	{
		name: 'Light\'s Refuge',
		icon: '/assets/icons/armours/rezakiri/LightsRefuge.png',
		index: 59,
		type: 'Arms',
		description: 'Arms protection forged from Rezakiri trophies.',
		cell: 'Technique',
		perk: {
			name: 'Conduit',
			type: 'Utility'
		},
		id: 'Rezakiri'
	},
	{
		name: 'Hands of the Rift',
		icon: '/assets/icons/armours/riftstalker/HandsOfTheRift.png',
		index: 64,
		type: 'Arms',
		description: 'Arms protection forged from Riftstalker trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Evasion',
			type: 'Mobility'
		},
		id: 'Riftstalker'
	},
	{
		name: 'Shrikedown Gloves',
		icon: '/assets/icons/armours/shrike/ShrikedownGloves.png',
		index: 67,
		type: 'Arms',
		description: 'Arms protection forged from Shrike trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Weighted Strikes',
			type: 'Technique'
		},
		id: 'Shrike'
	},
	{
		name: 'Dark Embrace',
		icon: '/assets/icons/armours/shrowd/DarkEmbrace.png',
		index: 71,
		type: 'Arms',
		description: 'Arms protection forged from Shrowd trophies.',
		cell: 'Utility',
		perk: {
			name: 'Medic',
			type: 'Utility'
		},
		id: 'Shrowd'
	},
	{
		name: 'Might of Stone',
		icon: '/assets/icons/armours/skarn/MightOfStone.png',
		index: 77,
		type: 'Arms',
		description: 'Arms protection forged from Skarn trophies.',
		cell: 'Defence',
		perk: {
			name: 'Fortress',
			type: 'Defence'
		},
		id: 'Skarn'
	},
	{
		name: 'Skraevwing Gloves',
		icon: '/assets/icons/armours/skraev/SkraevwingGloves.png',
		index: 81,
		type: 'Arms',
		description: 'Arms protection forged from Skraev trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Iceborne',
			type: 'Defence'
		},
		id: 'Skraev'
	},
	{
		name: 'Lightning Gloves',
		icon: '/assets/icons/armours/stormclaw/LightningGloves.png',
		index: 85,
		type: 'Arms',
		description: 'Arms protection forged from Stormclaw trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Catalyst',
			type: 'Utility'
		},
		id: 'Stormclaw'
	},
	{
		name: 'Thrax\'s Embrace',
		icon: '/assets/icons/armours/thrax/ThraxsEmbrace.png',
		index: 88,
		type: 'Arms',
		description: 'Arms protection forged from Thrax trophies.',
		cell: 'Power',
		perk: {
			name: 'Nine Lives',
			type: 'Defence'
		},
		id: 'Thrax'
	},
	{
		name: 'Torgadoro\'s Brawn',
		icon: '/assets/icons/armours/torgadoro/TorgadorosBrawn.png',
		index: 93,
		type: 'Arms',
		description: 'Arms protection forged from Torgadoro trophies.',
		cell: 'Power',
		perk: {
			name: 'Overpower',
			type: 'Power'
		},
		id: 'Torgadoro'
	},
	{
		name: 'Adversary\'s Wrath',
		icon: '/assets/icons/armours/urska/AdversarysWrath.png',
		index: 99,
		type: 'Arms',
		description: 'Arms protection forged from Urska trophies.',
		cell: 'Technique',
		perk: {
			name: 'Aetheric Frenzy',
			type: 'Utility'
		},
		id: 'Urska'
	},
	{
		name: 'Gauntlets of Valour',
		icon: '/assets/icons/armours/valomyr/GauntletsOfValour.png',
		index: 102,
		type: 'Arms',
		description: 'Arms protection forged from Valomyr trophies.',
		cell: 'Defence',
		perk: {
			name: 'Lucent',
			type: 'Utility'
		},
		id: 'Valomyr'
	}
];

const legs = [
	{
		name: 'Agaric Roots',
		icon: '/assets/icons/armours/agarus/AgaricRoots.png',
		index: 4,
		type: 'Legs',
		description: 'Leg and foot protection forged from Agarus trophies.',
		cell: 'Defence',
		perk: {
			name: 'Fortress',
			type: 'Defence'
		},
		id: 'Agarus'
	},
	{
		name: 'Boreal March',
		icon: '/assets/icons/armours/boreus/BorealMarch.png',
		index: 6,
		type: 'Legs',
		description: 'Leg and foot protection forged from Boreus trophies.',
		cell: 'Technique',
		perk: {
			name: 'Iceborne',
			type: 'Defence'
		},
		id: 'Boreus'
	},
	{
		name: 'Volcanic Treads',
		icon: '/assets/icons/armours/charrogg/VolcanicTreads.png',
		index: 13,
		type: 'Legs',
		description: 'Leg and foot protection forged from Charrogg trophies.',
		cell: 'Power',
		perk: {
			name: 'Rage',
			type: 'Power'
		},
		id: 'Charrogg'
	},
	{
		name: 'Draskscale Greaves',
		icon: '/assets/icons/armours/drask/DraskscaleGreaves.png',
		index: 15,
		type: 'Legs',
		description: 'Leg and foot protection forged from Drask trophies.',
		cell: 'Utility',
		perk: {
			name: 'Fleet Footed',
			type: 'Mobility'
		},
		id: 'Drask'
	},
	{
		name: 'Fiery Greaves',
		icon: '/assets/icons/armours/embermane/FieryGreaves.png',
		index: 20,
		type: 'Legs',
		description: 'Leg and foot protection forged from Embermane trophies.',
		cell: 'Defence',
		perk: {
			name: 'Evasion',
			type: 'Mobility'
		},
		id: 'Embermane'
	},
	{
		name: 'Recruit\'s Greaves',
		icon: '/assets/icons/armours/generic/RecruitsGreaves.png',
		index: 24,
		type: 'Legs',
		description: 'Leg and foot protection for the novice Slayer.',
		cell: 'None',
		perk: {
			name: 'None',
			type: 'None'
		},
		id: 'Generic'
	},
	{
		name: 'Gnasher Treads',
		icon: '/assets/icons/armours/gnasher/GnasherTreads.png',
		index: 29,
		type: 'Legs',
		description: 'Leg and foot protection forged from Gnasher trophies.',
		cell: 'Power',
		perk: {
			name: 'Tough',
			type: 'Defence'
		},
		id: 'Gnasher'
	},
	{
		name: 'Hellplate Greaves',
		icon: '/assets/icons/armours/hellion/HellplateGreaves.png',
		index: 33,
		type: 'Legs',
		description: 'Leg and foot protection forged from Hellion trophies.',
		cell: 'Power',
		perk: {
			name: 'Fortress',
			type: 'Defence'
		},
		id: 'Hellion'
	},
	{
		name: 'Dance of the Swarm',
		icon: '/assets/icons/armours/kharabak/DanceOfTheSwarm.png',
		index: 35,
		type: 'Legs',
		description: 'Leg and foot protection forged from Kharabak trophies.',
		cell: 'Power',
		perk: {
			name: 'Conditioning',
			type: 'Mobility'
		},
		id: 'Kharabak'
	},
	{
		name: 'Stride of Thorns',
		icon: '/assets/icons/armours/koshai/StrideOfThorns.png',
		index: 40,
		type: 'Legs',
		description: 'Leg and foot protection forged from Koshai trophies.',
		cell: 'Utility',
		perk: {
			name: 'Predator',
			type: 'Technique'
		},
		id: 'Koshai'
	},
	{
		name: 'Malkarion\'s March',
		icon: '/assets/icons/armours/malkarion/MalkarionsMarch.png',
		index: 43,
		type: 'Legs',
		description: 'Leg and foot protection forged from Malkarion trophies.',
		cell: 'Technique',
		perk: {
			name: 'Aetherhunter',
			type: 'Power'
		},
		id: 'Malkarion'
	},
	{
		name: 'Shocking Stride',
		icon: '/assets/icons/armours/nayzaga/ShockingStride.png',
		index: 49,
		type: 'Legs',
		description: 'Leg and foot protection forged from Nayzaga trophies.',
		cell: 'Defence',
		perk: {
			name: 'Energized',
			type: 'Utility'
		},
		id: 'Nayzaga'
	},
	{
		name: 'Feet of Ice',
		icon: '/assets/icons/armours/pangar/FeetOfIce.png',
		index: 53,
		type: 'Legs',
		description: 'Leg and foot protection forged from Pangar trophies.',
		cell: 'Defence',
		perk: {
			name: 'Overpower',
			type: 'Power'
		},
		id: 'Pangar'
	},
	{
		name: 'Quillspike Boots',
		icon: '/assets/icons/armours/quillshot/QuillspikeBoots.png',
		index: 54,
		type: 'Legs',
		description: 'Leg and foot protection forged from Quillshot trophies.',
		cell: 'Technique',
		perk: {
			name: 'Barbed',
			type: 'Technique'
		},
		id: 'Quillshot'
	},
	{
		name: 'Light\'s Walk',
		icon: '/assets/icons/armours/rezakiri/LightsWalk.png',
		index: 61,
		type: 'Legs',
		description: 'Leg and foot protection forged from Rezakiri trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Agility',
			type: 'Mobility'
		},
		id: 'Rezakiri'
	},
	{
		name: 'Striders of the Rift',
		icon: '/assets/icons/armours/riftstalker/StridersOfTheRift.png',
		index: 66,
		type: 'Legs',
		description: 'Leg and foot protection forged from Riftstalker trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Conduit',
			type: 'Utility'
		},
		id: 'Riftstalker'
	},
	{
		name: 'Shrikedown Greaves',
		icon: '/assets/icons/armours/shrike/ShrikedownGreaves.png',
		index: 68,
		type: 'Legs',
		description: 'Leg and foot protection forged from Shrike trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Grace',
			type: 'Mobility'
		},
		id: 'Shrike'
	},
	{
		name: 'Dark Path',
		icon: '/assets/icons/armours/shrowd/DarkPath.png',
		index: 73,
		type: 'Legs',
		description: 'Leg and foot protection forged from Shrowd trophies.',
		cell: 'Utility',
		perk: {
			name: 'Nine Lives',
			type: 'Defence'
		},
		id: 'Shrowd'
	},
	{
		name: 'Pillars of Stone',
		icon: '/assets/icons/armours/skarn/PillarsOfStone.png',
		index: 78,
		type: 'Legs',
		description: 'Leg and foot protection forged from Skarn trophies.',
		cell: 'Defence',
		perk: {
			name: 'Guardian',
			type: 'Defence'
		},
		id: 'Skarn'
	},
	{
		name: 'Skraevwing Boots',
		icon: '/assets/icons/armours/skraev/SkraevwingBoots.png',
		index: 80,
		type: 'Legs',
		description: 'Leg and foot protection forged from Skraev trophies.',
		cell: 'Utility',
		perk: {
			name: 'Adrenaline',
			type: 'Technique'
		},
		id: 'Skraev'
	},
	{
		name: 'Lightning Boots',
		icon: '/assets/icons/armours/stormclaw/LightningBoots.png',
		index: 84,
		type: 'Legs',
		description: 'Leg and foot protection forged from Stormclaw trophies.',
		cell: 'Mobility',
		perk: {
			name: 'Aetheric Frenzy',
			type: 'Utility'
		},
		id: 'Stormclaw'
	},
	{
		name: 'Thrax\'s Guile',
		icon: '/assets/icons/armours/thrax/ThraxsGuile.png',
		index: 89,
		type: 'Legs',
		description: 'Leg and foot protection forged from Thrax trophies.',
		cell: 'Technique',
		perk: {
			name: 'Cunning',
			type: 'Technique'
		},
		id: 'Thrax'
	},
	{
		name: 'Torgadoro\'s Gait',
		icon: '/assets/icons/armours/torgadoro/TorgadorosGait.png',
		index: 95,
		type: 'Legs',
		description: 'Leg and foot protection forged from Torgadoro trophies.',
		cell: 'Power',
		perk: {
			name: 'Knockout King',
			type: 'Power'
		},
		id: 'Torgadoro'
	},
	{
		name: 'AdversarysDrive',
		icon: '/assets/icons/armours/urska/AdversarysDrive.png',
		index: 96,
		type: 'Legs',
		description: 'Leg and foot protection forged from Urska trophies.',
		cell: 'Utility',
		perk: {
			name: 'Guardian',
			type: 'Defence'
		},
		id: 'Urska'
	},
	{
		name: 'Greaves of Valour',
		icon: '/assets/icons/armours/valomyr/GreavesOfValour.png',
		index: 103,
		type: 'Legs',
		description: 'Leg and foot protection forged from Valomyr trophies.',
		cell: 'Utility',
		perk: {
			name: 'Aetherhunter',
			type: 'Power'
		},
		id: 'Valomyr'
	}
]