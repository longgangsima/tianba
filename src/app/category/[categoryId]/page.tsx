const categoryDetail = ({ params }: { params: { categoryId: string } }) => {
  return (
    <div>
      <h1>Category Detail</h1>
      <p>Product ID: {params.categoryId}</p>
    </div>
  );
};
export default categoryDetail;
