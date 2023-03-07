import axios from 'axios';
import { useState, useEffect } from 'react';
import CopyToClipboard  from 'react-copy-to-clipboard';

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

const LinkResult = ({ inputValue }) => {
  // console.log(inputValue);
  const [shortenLink, setShortenLink] = useState("");
  //console.log(shortenLink);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer)
  }, [copied]);
  //console.log(shortenLink)

  if (loading) {
    return <p className="text-white text-3xl text-center">Loading...</p>
  }

  if (error) {
    return <p className="text-white text-3xl text-center">Something went wrong... :(</p>
  }

  return (
    <>
      {shortenLink && (
        <div className="m-auto flex flex-row px-3 sm:flex-row">
          <p className="border-black border-2 px-2 text-white rounded-sm bg-transparent outline-none mx-4">{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={cn("bg-yellow-500 mx-3 px-3 rounded-xl text-white hover:bg-yellow-400", copied ? "copied" : "")}
            >
              Copy to clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  )
}
export default LinkResult