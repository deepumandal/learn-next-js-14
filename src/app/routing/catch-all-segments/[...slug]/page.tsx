const page = ({ params }: { params: string[] }) => {
  console.log("params", params); // params { slug: [ 'route1', 'route2', 'route3', 'route4', 'route5' ] }
  return <div>page</div>;
};

export default page;
