const ProfilePage = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-[#FFFFFF] w-[22%] h-screen">
        <div className="relative">
          <img
            className="w-full"
            src="images/profileCoverPhoto.png"
            alt="profileCoverPhoto"
          />
          <div className="size-[110px] rounded-full bg-primary border-[10px] border-[#FFFFFF] absolute top-1/2 left-1/2 -translate-x-1/2 "></div>
        </div>
        <div className="text-center">
          <h4 className="font-poppins font-bold text-base text-[#000000]">
            A B M Shawon Islam
          </h4>
          <p className="para">www.abm.com</p>
        </div>
        <div className="flex justify-between items-center gap-x-12 px-8">
          <div className="text-center">
            <h6 className="subTitle">930</h6>
            <span className="para">Friends</span>
          </div>
          <div className="text-center relative after:absolute after:content-[''] after:bg-profileItemColor after:w-[1px] after:h-[25px] after:left-[-48px] after:top-[50%] after:-translate-y-1/2 before:absolute before:content-[''] before:bg-profileItemColor before:w-[1px] before:h-[25px] before:right-[-50px] before:top-[50%] before:-translate-y-1/2">
            <h6 className="subTitle">87</h6>
            <span className="para">Posts</span>
          </div>
          <div className="text-center">
            <h6 className="subTitle">1k</h6>
            <span className="para">Followers</span>
          </div>
        </div>
      </div>
      <div className="bg-green-500 w-[70%] h-screen">two</div>
      <div className="bg-[#FFFFFF] w-[8%] h-screen ">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
