const caloriesData = [
  {
    key: 1,
    icon: "directions_run",
    heading: "Running",
    details: "120.5 km",
    bcolor: "#161132",
  },
  {
    key: 2,
    icon: "heart_broken",
    heading: "BMI",
    details: "12 bmi",
    bcolor: "#fcad77",
  },
  {
    key: 3,
    icon: "directions_run",
    heading: "Calorie loss",
    details: "7,890 kcal",
    bcolor: "#837ffa",
  },
  {
    key: 4,
    icon: "directions_run",
    heading: "Steps",
    details: "11,000 steps",
    bcolor: "#72c7fd",
  },
  {
    key: 5,
    icon: "favorite",
    heading: "Heart beat",
    details: "78",
    bcolor: "#fcad77",
  },
  {
    key: 6,
    icon: "heart_broken",
    heading: "Oxygen level",
    details: "98",
    bcolor: "#837ffa",
  },
];

const yogaData = [
  {
    key: 1,
    headingtext: "Advance Flow Yoga",
    description:
      "Advance Flow Yoga is the basics, powered up. Step in for this longer",
    img: "https://images.pexels.com/photos/8172941/pexels-photo-8172941.jpeg?auto=compress&cs=tinysrgb&w=600",
    profileimg:
      "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png",
    duration: "1hr 25m",
  },
  {
    key: 2,
    headingtext: "Aqua Fit Class",
    description:
      "Challenge your whole body when you work out in a pool. The water will...",
    img: "https://images.pexels.com/photos/4057839/pexels-photo-4057839.jpeg?auto=compress&cs=tinysrgb&w=600",
    profileimg:
      "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png",
    duration: "1hr 25m",
  },
  {
    key: 3,
    headingtext: "Aerial Flow Yoga",
    description:
      "Elevate your practice with Aerial Yoga. The entire class takes place mid-air...",
    img: "https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=600",
    profileimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU",
    duration: "1hr 25m",
  },
  {
    key: 4,
    headingtext: "X Blast Wokrout Class",
    description:
      "Get Stronger in less than 30 minutes. This high-energy cross training ...",
    img: "https://images.pexels.com/photos/3150250/pexels-photo-3150250.jpeg?auto=compress&cs=tinysrgb&w=600",
    profileimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxapDwCeVLL0T69nhwV_BgqH9lztNDYQGhCbUVKHMgITKzGDlPsa55HS-6dqUdC8Qt5VU&usqp=CAU",
    duration: "1hr 25m",
  },
  {
    key: 5,
    headingtext: "Advance Flow Yoga",
    description:
      "Advance Flow Yoga is the basics, powered up. Step in for this longer",
    img: "https://images.pexels.com/photos/3658399/pexels-photo-3658399.jpeg?auto=compress&cs=tinysrgb&w=600",
    profileimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29IJ8KCmCFp4SZU-npyzA_axjUuDu3IYgcklwMcwImCdooBMPyim1ycUr5g5G_0YmnIk&usqp=CAU",
    duration: "1hr 25m",
  },
  {
    key: 6,
    headingtext: "Advance Flow Yoga",
    description:
      "Advance Flow Yoga is the basics, powered up. Step in for this longer",
    img: "https://images.pexels.com/photos/3820393/pexels-photo-3820393.jpeg?auto=compress&cs=tinysrgb&w=600",
    profileimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29IJ8KCmCFp4SZU-npyzA_axjUuDu3IYgcklwMcwImCdooBMPyim1ycUr5g5G_0YmnIk&usqp=CAU",
    duration: "1hr 25m",
  },
  {
    key: 7,
    headingtext: "Aerial Flow Yoga",
    description:
      "Elevate your practice with Aerial Yoga. The entire class takes place mid-air...",
    img: "https://images.pexels.com/photos/6698513/pexels-photo-6698513.jpeg?auto=compress&cs=tinysrgb&w=600",
    profileimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU",
    duration: "0hr 40m",
  },
  {
    key: 8,
    headingtext: "X Blast Wokrout Class",
    description:
      "Get Stronger in less than 30 minutes. This high-energy cross training ...",
    img: "https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=600",
    profileimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU",
    duration: "2hr 36m",
  },
];

const trainersData = [
  {
    key: 1,
    name: "Ramy Baginda",
    profession: "Gym Trainer",
    following: "12,668",
    profileimg:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    key: 2,
    name: "Ramy Baginda",
    profession: "Gym Trainer",
    following: "12,668",
    profileimg:
      "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    key: 3,
    name: "Ramy Baginda",
    profession: "Gym Trainer",
    following: "12,668",
    profileimg:
      "https://images.unsplash.com/photo-1571988654190-ef2bfb6fb147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    key: 4,
    name: "Ramy Baginda",
    profession: "Gym Trainer",
    following: "12,668",
    profileimg:
      "https://images.unsplash.com/photo-1561828970-daff2303fe58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    key: 5,
    name: "Ramy Baginda",
    profession: "Gym Trainer",
    following: "12,668",
    profileimg:
      "https://images.unsplash.com/photo-1585837146751-a44118595680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NzYwODI3NzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    key: 6,
    name: "Ramy Baginda",
    profession: "Gym Trainer",
    following: "12,668",
    profileimg:
      "https://images.unsplash.com/photo-1602746469689-460d31b6ed5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8NzYwODI3NzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    key: 7,
    name: "Ramy Baginda",
    profession: "Gym Trainer",
    following: "12,668",
    profileimg:
      "https://images.unsplash.com/photo-1573727726579-10ce410611ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8NzYwODI3NzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

export { caloriesData, yogaData, trainersData };
