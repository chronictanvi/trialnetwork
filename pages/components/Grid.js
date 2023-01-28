import Button from "./Button";
export default Grid;

function Grid() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-6 font-mono text-white text-sm font-bold leading-6 bg-stripes-fuchsia  text-center">
      <Button value="01" />

      {/* // postArray[coordinates[0], coordinates[1]] */}
      <Button value="02" />
      <Button value="03" />

      <Button value="04" />
      <Button value="05" />
      <Button value="06" />

      <Button value="07" />
      <Button value="08" />
      <Button value="09" />
    </div>
  );
}
