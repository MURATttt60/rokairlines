export default function GovernorCard() {
  return (
    <div className="rounded-2xl bg-slate-900 p-8 border border-slate-800">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold">
            Murat Governor
          </h2>

          <p className="mt-2 text-slate-400">
            Kingdom #2377
          </p>
        </div>


        <div className="text-right">

          <p className="text-slate-400">
            Governor ID
          </p>

          <p className="text-xl font-bold">
            12345678
          </p>

        </div>

      </div>



      <div className="mt-8 grid grid-cols-4 gap-5">


        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400">
            Power
          </p>
          <p className="mt-2 text-2xl font-bold">
            8.5B
          </p>
        </div>



        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400">
            Kill Points
          </p>
          <p className="mt-2 text-2xl font-bold">
            50B
          </p>
        </div>



        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400">
            Deaths
          </p>
          <p className="mt-2 text-2xl font-bold">
            900M
          </p>
        </div>



        <div className="rounded-xl bg-slate-800 p-5">
          <p className="text-slate-400">
            Rank
          </p>
          <p className="mt-2 text-2xl font-bold">
            #15
          </p>
        </div>


      </div>


    </div>
  );
}