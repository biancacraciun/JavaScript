const human__readable = seconds => {

    if (seconds > 359999) {
        return "The maximum time never exceeds 359999!!";
    };

    let hours = Math.floor( seconds / 3600 );
    let minutes = Math.floor( (seconds - (hours * 3600)) / 60 );
    let second = Math.floor( seconds - (hours * 3600) - (minutes * 60) );

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
};

human__readable(0); // '00:00:00';
human__readable(5); // '00:00:05'; 
human__readable(60); // '00:01:00';