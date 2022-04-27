const multiply = (first, sec) => first * sec 
const PLAYER = 'Ronaldo'
const playerDetail = {
    name: 'Ronaldo Nazario',
    age: '32',
    country: 'Brazil',
    position: 'Forward',
    club: 'Real Madrid',
    number: '10',
    getGoalScored(){
        return `${this.name} has scored 100 goals for ${this.club}`
    }
}

class PlayerClub {
    constructor(name, club){
        this.name = name
        this.club = club
    }
 
    getCLubStat(){
        return `${this.name} has played for ${this.club} for 5 years`
    }
}

// module.exports = {
//     multiply : multiply,
//     PLAYER : PLAYER,
//     playerDetail : playerDetail,
//     PlayerClub : PlayerClub,
// }

export default {multiply, PLAYER, playerDetail, PlayerClub}