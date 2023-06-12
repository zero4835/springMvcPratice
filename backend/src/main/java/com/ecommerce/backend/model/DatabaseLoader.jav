package com.ecommerce.backend.model;

@Component
public class DatabaseLoader implements CommandLineRunner {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public void run(String... args) throws Exception {

    Member member = new Member("michael@gmail.com", "abc12345", "michael", "jordan");
    memberRepository.save(member);

    }
}