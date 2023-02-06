import Button from "./Button";
export default Grid;

function Grid({ setCoordinates }) {
  return (
    <div className="w-1/2 grid grid-cols-3 grid-rows-3 gap-6 font-mono text-black text-sm font-bold leading-6 bg-stripes-fuchsia  text-center">
      {/* // postArray[coordinates[0], coordinates[1]] */}
      <Button coordinates={[0, 0]} setCoordinates={setCoordinates} />
      <Button coordinates={[0, 1]} setCoordinates={setCoordinates} />
      <Button coordinates={[0, 2]} setCoordinates={setCoordinates} />

      <Button coordinates={[1, 0]} setCoordinates={setCoordinates} />
      <Button coordinates={[1, 1]} setCoordinates={setCoordinates} />
      <Button coordinates={[1, 2]} setCoordinates={setCoordinates} />

      <Button coordinates={[2, 0]} setCoordinates={setCoordinates} />
      <Button coordinates={[2, 1]} setCoordinates={setCoordinates} />
      <Button coordinates={[2, 2]} setCoordinates={setCoordinates} />
    </div>
  );
}
