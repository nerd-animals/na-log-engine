import Image from 'next/image';

export default function Bio() {
  return (
    <div className="bio">
      <Image
        className="bio-profile"
        src="/na-log/profile.png"
        alt="profile"
        width={200}
        height={200}
      />
      <div className="bio-introduction">
        <strong>Nerd Animals</strong>
        <br /> <strong>No-answer</strong>를 <strong>Yes-answer</strong>로!
      </div>
    </div>
  );
}
