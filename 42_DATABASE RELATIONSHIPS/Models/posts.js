const mongoose = require("mongoose");
const { Schema } = mongoose;


main().then(() => console.log("Connection SuccesSful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema(
    {
        username : String ,
        email : String
    }
)

const postSchema = new Schema(
    {
        content: String,
        likes : Number,
        user : {
            type : Schema.Types.ObjectId,
            ref : "User"
        }
    }
)

const User = new mongoose.model("User", userSchema);
const Post = new mongoose.model("Post", postSchema);

// const addData = async() => {
//     let user = await User.findOne({username : "rahulkumar"});

//     let post2 = new Post(
//         {
//             content : "Bye Bye",
//             likes: 857,
//         }
//     )
//     post2.user = user;

//     let result = await post2.save();
//     console.log(result)
// }

// addData();


const del = async() => {
    await User.findByIdAndDelete('6a1ffbc0b21b51a0af965047')
    await Post.findByIdAndDelete('6a2010eed5d9a52aaff69f84')
}

del();