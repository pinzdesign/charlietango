import {Skeleton} from "@nextui-org/skeleton";

export default function Page() {
    return (
      <main className="mx-auto max-w-screen-xl">
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300">Henter rapporten...</div>
        </Skeleton>
        <div className="grid_2_1">
          <Skeleton className="h-5 text-2xl mb-5">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="h-5 screenshotWrapSkeleton">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>

        <div className="p-4 mb-4 border border-gray-200">
          <Skeleton className="text-xl mb-3"><p></p></Skeleton>
          <Skeleton><p className="h-3 w-3/5 rounded-lg"></p></Skeleton>
          <Skeleton><p className="h-3 w-3/5 rounded-lg"></p></Skeleton>
          <Skeleton><p className="h-3 w-3/5 rounded-lg"></p></Skeleton>
        </div>
      </main>
    );
}
