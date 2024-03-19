export default function Github() {
    return (
      <div className="bg-white my-auto py-auto sm:py-auto font-quicksand">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Github details</h2>
                    <p className="mt-6 text-lg leading-8 ">
                      Here is our CTO's github profile fetched by github api. you can see all the gradients he used to make our site.
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-x-8">
                  <img className="object-cover  h-48 w-48 rounded-full" src='https://images.pexels.com/photos/1321913/pexels-photo-1321913.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" />
                          <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-semibold leading-7 tracking-tight mb-1" >Devin </h1>
                            <p className="text-lg font-semibold leading-6 text-gray-900">4 followers</p>
                            <p className="text-lg font-semibold leading-6 text-gray-900">12 Reposetaries</p>
                            <p className="text-lg font-semibold leading-6 text-blue-900 cursor-pointer">Profile link</p>
                          </div>
                  </div>
            </div>
      </div>
    )
  }
  