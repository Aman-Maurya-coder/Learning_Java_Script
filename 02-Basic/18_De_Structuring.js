//IMP: de-structring :

const course = {
    course_name : "js in hindi",
    price : 999,
    course_teacher : "hitesh"
}

// course.course_teacher                                //NOTE: instead of doing this we can do the following
const {course_teacher : c_instructor} = course          //NOTE: c_instructor is now an alias

// console.log(c_instructor);


