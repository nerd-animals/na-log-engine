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
        Nerd Animals
        <br /> No-answer를 Yes-answer로!
      </div>
    </div>
  );
}
