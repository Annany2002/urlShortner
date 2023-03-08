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
    return <p className="text-white text-3xl text-center my-3">Loading...</p>
  }

  if (error) {
    return <p className="text-gray-300 text-3xl text-center my-6">Something went wrong. . .  Please try again  :( </p>
  }

  return (
    <>
      {shortenLink && (
        <div className="flex flex-col mx-auto justify-center p-3 sm:flex-row">
          <p className="border-black border-2 px-2 text-white rounded-md bg-transparent outline-none font-serif mb-2 sm:mb-0">{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={cn("bg-yellow-500 mx-4 my-2 px-3 rounded-xl text-white hover:bg-yellow-400 sm:mx-6 sm:my-0", copied ? "copied" : "")}
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