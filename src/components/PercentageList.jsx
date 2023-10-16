function PercentageList({ sectorId, percentage }) {
  return (
    <tr>
      <td className="values">{sectorId}</td>
      <td className="values">{percentage}</td>
    </tr>
  );
}

export default PercentageList;
