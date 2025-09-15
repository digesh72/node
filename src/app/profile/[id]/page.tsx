export default function UserProfile({ params }: any) {
  return (
    <div>
      <p>
        Profile Page<span>{params.id}</span>
      </p>
    </div>
  );
}
