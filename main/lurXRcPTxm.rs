fn reverse_string(s: &str) -> String {
    s.chars().rev().collect()
}

fn is_palindrome(s: &str) -> bool {
    let reversed = reverse_string(s);
    s == reversed
}

fn count_vowels(s: &str) -> usize {
    s.chars().filter(|&c| "aeiouAEIOU".contains(c)).count()
}

fn main() {
    let test_str = "racecar";
    let reversed = reverse_string(test_str);
    let palindrome = is_palindrome(test_str);
    let vowel_count = count_vowels(test_str);
    println!("Reversed: {}", reversed);
    println!("Is palindrome: {}", palindrome);
    println!("Vowel count: {}", vowel_count);
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_reverse_string() {
        assert_eq!(reverse_string("hello"), "olleh");
    }
    #[test]
    fn test_is_palindrome() {
        assert!(is_palindrome("madam"));
    }
    #[test]
    fn test_count_vowels() {
        assert_eq!(count_vowels("hello world"), 3);
    }
}
