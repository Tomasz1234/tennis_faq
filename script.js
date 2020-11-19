const rule = document.getElementById("rule_description");
const rule_name = document.getElementById("rule_name");


const data = [
    {
        "nazwa":"Ace", "description":"A ball that is served so well the opponent cannot touch it with their racquet."
    },
    {
        "nazwa":"AD", "description":"Short for Advantage. It is the point scored after Deuce. If the serving side scores, it is Ad-in. If the receiving side scores, it is Ad-out."
    },
    {
        "nazwa":"Backhand", "description":"The stroke used to return balls hit to the left side of a right-handed player (or to the right side of a left-handed player). Backhands are hit either one-handed or two-handed."
    },
    {
        "nazwa":"Deuce", "description":"A score of 40-all, or 40-40. (This means the score is tied and each side has won at least three points.)"
    },
    {
        "nazwa":"Forehand", "description":"The stroke used to return balls hit to the right side of a right-handed player (or to the left side of a left-handed player). Forehands are commonly hit one-handed."
    },
    {
        "nazwa":"Game", "description":"The part of a set that is completed when one player or side either wins four points and is at least two points ahead of his or her opponent, or who wins two points in a row after deuce."
    },
    {
        "nazwa":"Let", "description":"A point played over because of interference. Also, a serve that hits the top of the net but is otherwise good, in which case the serve is taken again."
    },
    {
        "nazwa":"Lob", "description":"A stroke that lifts the ball high in the air, usually over the head of the opponent at the net."
    },
    {
        "nazwa":"Set", "description":"A scoring unit awarded to a player who or team that has won: (a) 6 or more games and has a two-game lead; or (b) 6 games and the tiebreak game when played at 6-all."
    },
    {
        "nazwa":"Slice", "description":"A shot that imparts backspin on the ball by hitting the ball with a high-to-low motion."
    } ,   
    {
        "nazwa":"Tiebreak", "description":"A system in traditional tennis used to decide a set when the score is tied, 6-all."
    },
    {
        "nazwa":"Lob", "description":"A stroke that lifts the ball high in the air, usually over the head of the opponent at the net."
    } ,   
    {
        "nazwa":"Topspin", "description":"Forward rotation of the ball caused by hitting from low to high."
    } ,   
    {
        "nazwa":"Volley", "description":"During play, a stroke made by hitting the ball before it has touched the ground."
    } ,   
    {
        "nazwa":"Lob", "description":"A stroke that lifts the ball high in the air, usually over the head of the opponent at the net."
    }
]

let random_number = Math.floor(Math.random() * 10);
rule.innerText = data[random_number].description;
rule_name.innerText = data[random_number].nazwa;