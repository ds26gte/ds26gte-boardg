import Avatar from './Avatar';

export default function Profile(props) {
  // for now Profile is practically Avatar, but this allows for possible wrappers
  return (
    <Avatar {...props}/>
  );
}
