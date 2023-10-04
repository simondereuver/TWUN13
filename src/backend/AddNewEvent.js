const eventModule = require('../backend/eventModule'); 

export async function AddEvent(uEmail, uEvnetName, uDate, uTime, uLocation, uAgenda)
{
    const newEvent = new eventModule({
        email: uEmail,
        eventname: uEvnetName,
        date: uDate,
        time: uTime,
        location: uLocation,
        agenda: uAgenda
    });
    newEvent.save();
    let test = await eventModule.findOne({ email:'samuel.leyonberg@gmail.com',  });
    console.log(test);
}