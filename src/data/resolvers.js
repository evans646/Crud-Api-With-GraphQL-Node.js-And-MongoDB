import {Phones} from './getDBConnection';

// resolver map
export const resolvers = { 
       Query: {
        getOnePhone: (root, { id }) => {
            return new Promise(( resolve, object) => {
                Phones.findById(id, (err, phone) => {
                    if (err) reject(err)
                    else resolve(phone)
                })
            })
        },
    },
    //mutaion to handle create,update and delete 
    Mutation: {
        createPhone: (root, { input }) => {
            const newPhone = new Phones({
                name:input.name,
                brand: input.brand,
                hardware:input.hardware,
                isQuality:input.isQuality,
                reviews:input.reviews
            });

            newPhone.id = newPhone._id;

            return new Promise((resolve, object) => {
                newPhone.save((err) => {
                    if (err) reject(err)
                    else resolve(newPhone)
                })
            })
        },
        updateFriend: (root, { input }) => {
            return new Promise((resolve, object)=>{
                //get the id from graphQL pass it to mongo to update a friend in the db 
                Friends.findByIdAndUpdate({_id:input.id},input,{new:true},(err,friend)=>{
                    if(err) console.log(err)
                    else resolve(friend)
                })
            })
        },
        deleteFriend: (root, { id }) => {
            return new Promise(( resolve, object) => {
                Friends.remove({ _id: id }, (err) => {
                    if (err) reject(err)
                    else resolve('Successfully deleted friend')
                })
            })
        }
    },
};
