if (App.collections.offers.find().count() === 0) {
	Meteor.startup(function () {
		_.each(_.range(100), function(){
			App.collections.offers.insert({
				title: faker.lorem.sentence(),
				desc: faker.lorem.paragraph(),
				address: faker.address.city() + ', ' + faker.address.streetAddress(),
				picture: image.imageUrl,
				favorite: faker.random.array_element([true, false, false, false]),
				price: faker.finance.amount() * 1000,
				type: faker.random.array_element([1, 2, 3, 4]),
                date: faker.random.date.past,
				params: faker.random.array_element([
					[
						{ bedrooms: faker.random.array_element([1, 2, 3, 4]) },
						{ floor: faker.random.array_element([1, 2, 3, 4, 5, 6]) },
						{ floorsTotal: faker.random.array_element([6, 7, 8, 9, 10]) },
						{ internet: faker.random.array_element([true, false]) },
						{ telephone: faker.random.array_element([true, false]) },
						{ balcony: faker.random.array_element([true, false]) },
						{ garage: faker.random.array_element([true, false]) },
						{ waterpool: faker.random.array_element([true, false]) }
					],
					[
						{ bedrooms: faker.random.array_element([1, 2, 3, 4]) },
						{ floor: faker.random.array_element([1, 2, 3, 4, 5, 6]) },
						{ floorsTotal: faker.random.array_element([6, 7, 8, 9, 10]) },
						{ internet: faker.random.array_element([true, false]) },
						{ telephone: faker.random.array_element([true, false]) }
					],
					[
						{ bedrooms: faker.random.array_element([1, 2, 3, 4]) },
						{ floor: faker.random.array_element([1, 2, 3, 4, 5, 6]) },
						{ floorsTotal: faker.random.array_element([6, 7, 8, 9, 10]) },
						{ waterpool: faker.random.array_element([true, false]) }
					]
				]),
				position: [
					parseFloat(faker.address.latitude()),
					parseFloat(faker.address.longitude())
				]
			});
		});
	});
}
