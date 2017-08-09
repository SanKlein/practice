// File copy with streaming API.
// Pass a callback if you want to know when it is done
function fileCopy(filename1, filename2, done) {
    var input = fs.createReadStream(filename1);          // Input stream
    var output = fs.createWriteStream(filename2);        // Output stream

    input.on("data", function(d) { output.write(d); });  // Copy in to out
    input.on("error", function(err) { throw err; });     // Raise errors
    input.on("end", function() {                         // When input ends
        output.end();                                    // close output
        if (done) done();                                // And notify callback
    });
}
